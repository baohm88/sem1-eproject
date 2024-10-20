import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { formatter } from "../../util/formatter";
import Modal from "./Modal";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./SkincareProducts.module.css";
import ProductItem from "./ProductItem";
import Pagination from "../UI/Pagination";

export default function MakeupProducts() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Modal state
    const [sortOption, setSortOption] = useState("");
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sliderIsVisible, setSliderIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();
    const navigate = useNavigate();

    const productsPerPage = 4;

    // Fetch makeup products from the database
    useEffect(() => {
        axios
            .get("http://localhost/project/collections/makeup")
            .then((res) => setProducts(res.data.data));
    }, []);

    // Parse URL parameters
    const queryParams = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return {
            category: params.get("category") || "",
            searchText: params.get("q") || "",
        };
    }, [location.search]);

    // Filtered products based on category, search text, and price range
    const filteredProducts = useMemo(() => {
        let filtered = products;

        // Filter by category
        if (queryParams.category) {
            filtered = filtered.filter(
                (product) => product.sub_category === queryParams.category
            );
        }

        // Filter by search text
        if (queryParams.searchText) {
            const searchTextLower = queryParams.searchText.toLowerCase();
            filtered = filtered.filter(
                (product) =>
                    product.product_name
                        .toLowerCase()
                        .includes(searchTextLower) ||
                    product.product_description
                        .toLowerCase()
                        .includes(searchTextLower)
            );
        }

        // Filter by price range
        filtered = filtered.filter(
            (product) =>
                product.product_price >= priceRange[0] &&
                product.product_price <= priceRange[1]
        );

        // Sort products
        switch (sortOption) {
            case "name_asc":
                filtered.sort((a, b) =>
                    a.product_name.localeCompare(b.product_name)
                );
                break;
            case "name_desc":
                filtered.sort((a, b) =>
                    b.product_name.localeCompare(a.product_name)
                );
                break;
            case "price_asc":
                filtered.sort((a, b) => a.product_price - b.product_price);
                break;
            case "price_desc":
                filtered.sort((a, b) => b.product_price - a.product_price);
                break;
            default:
                break;
        }

        return filtered;
    }, [products, queryParams, sortOption, priceRange]);

    // Pagination logic
    const currentProducts = useMemo(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    }, [filteredProducts, currentPage]);

    // Update category in the URL
    const updateCategoryInURL = (category) => {
        navigate({
            pathname: "/makeup",
            search: `?category=${category}`,
        });
    };

    // Handle price range change
    const handlePriceRangeChange = (newRange) => {
        setSelectedRange(true);
        setPriceRange(newRange);
    };

    return (
        <>
            <div className={classes.center}>
                <h1>MAKEUP</h1>
                <p>
                    At Clarins, we believe that nature reveals our true beauty.
                    Shop our expert selection of beauty bestsellers for face,
                    eyes, and lips, powered by plants.
                </p>
            </div>

            {/* Category Tabs */}
            <div className={classes["tabs-container"]}>
                <button
                    className={
                        queryParams.category === "Face" ? classes.active : ""
                    }
                    onClick={() => updateCategoryInURL("Face")}
                >
                    Face
                </button>
                <button
                    className={
                        queryParams.category === "Eyes" ? classes.active : ""
                    }
                    onClick={() => updateCategoryInURL("Eyes")}
                >
                    Eyes
                </button>
                <button
                    className={
                        queryParams.category === "Lips" ? classes.active : ""
                    }
                    onClick={() => updateCategoryInURL("Lips")}
                >
                    Lips
                </button>
                <button
                    className={!queryParams.category ? classes.active : ""}
                    onClick={() => navigate("/makeup")}
                >
                    View All
                </button>
            </div>

            {/* Sorting and Filtering */}
            <div className={classes.filters}>
                <div className={classes["sort-options"]}>
                    <label htmlFor="sort">
                        <strong>Sort by: </strong>
                    </label>
                    <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select
                        </option>
                        <option value="name_asc">Name (A-Z)</option>
                        <option value="name_desc">Name (Z-A)</option>
                        <option value="price_asc">Price (Low to High)</option>
                        <option value="price_desc">Price (High to Low)</option>
                    </select>
                </div>

                {/* Price Range Filter */}
                <div>
                    <h4
                        onClick={() => setSliderIsVisible((prev) => !prev)}
                        className={classes["filter-options"]}
                    >
                        Price{" "}
                        {sliderIsVisible ? <FaCaretUp /> : <FaCaretDown />}
                    </h4>
                    {sliderIsVisible && (
                        <Slider
                            range
                            min={0}
                            max={200}
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            step={5}
                        />
                    )}
                    {selectedRange && (
                        <p className={classes.selectedRange}>
                            <span
                                onClick={() => {
                                    setPriceRange([0, 200]);
                                    setSelectedRange(false);
                                }}
                            >
                                X
                            </span>
                            {formatter.format(priceRange[0])} -{" "}
                            {formatter.format(priceRange[1])}
                        </p>
                    )}
                </div>
            </div>

            {/* Total Products Count */}
            <div className={classes["total-products"]}>
                <h5>{filteredProducts.length} products</h5>
            </div>

            {/* Product Grid */}
            <div className="products-container">
                {currentProducts.map((product) => (
                    <ProductItem
                        key={product.product_id}
                        product={product}
                        openModal={() => setSelectedProduct(product)}
                    />
                ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(
                        filteredProducts.length / productsPerPage
                    )}
                    paginate={setCurrentPage}
                />
            )}

            {/* Modal */}
            {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}
