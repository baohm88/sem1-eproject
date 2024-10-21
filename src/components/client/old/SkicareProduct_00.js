import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { formatter } from "../../../util/formatter";
import Modal from "../Modal";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./SkincareProducts.module.css";
import ProductItem from "../ProductItem";
import Pagination from "../../UI/Pagination";

export default function SkincareProducts() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const [sortOption, setSortOption] = useState("");
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const [sliderIsVisible, setSliderIsVisible] = useState(false);

    const location = useLocation(); // Get the current location (URL)
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 4; // Number of products per page

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // Fetch skincare products from the database
    useEffect(() => {
        axios
            .get("http://localhost/project/collections/skincare")
            .then((res) => {
                setProducts(res.data.data);
                setFilteredProducts(res.data.data); // Show all products initially
            });
    }, []);

    // Handle category and search text filtering
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get("category");
        const searchText = params.get("q");

        let filtered = products;

        if (category) {
            filtered = filtered.filter(
                (product) => product.sub_category === category
            );
            setSelectedCategory(category); // Set the selected category state
        } else {
            setSelectedCategory(""); // Clear category selection if not provided
        }

        if (searchText) {
            filtered = filtered.filter(
                (product) =>
                    (product.product_name &&
                        product.product_name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())) ||
                    (product.product_description &&
                        product.product_description
                            .toLowerCase()
                            .includes(searchText.toLowerCase()))
            );
        }

        setFilteredProducts(filtered);
    }, [location.search, products]); // Re-run when the URL or products change

    // Handle sorting and price range filtering
    useEffect(() => {
        let filtered = products;

        // Apply category filter first
        if (selectedCategory) {
            filtered = filtered.filter(
                (product) => product.sub_category === selectedCategory
            );
        }

        // Apply sorting
        if (sortOption === "name_asc") {
            filtered.sort((a, b) =>
                a.product_name.localeCompare(b.product_name)
            );
        } else if (sortOption === "name_desc") {
            filtered.sort((a, b) =>
                b.product_name.localeCompare(a.product_name)
            );
        } else if (sortOption === "price_asc") {
            filtered.sort((a, b) => a.product_price - b.product_price);
        } else if (sortOption === "price_desc") {
            filtered.sort((a, b) => b.product_price - a.product_price);
        }

        // Apply price range filter
        filtered = filtered.filter(
            (product) =>
                product.product_price >= priceRange[0] &&
                product.product_price <= priceRange[1]
        );

        setFilteredProducts(filtered);
    }, [sortOption, priceRange, products, selectedCategory]); // Sort and filter whenever any of these change

    // Add category to URL
    function updateCategoryInURL(category) {
        navigate({
            pathname: "/skincare",
            search: `?category=${category}`,
        });
    }

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const openModal = (product) => {
        setSelectedProduct(product); // Set the selected product for the modal
    };

    const closeModal = () => {
        setSelectedProduct(null); // Close the modal by setting the selected product to null
    };

    // Handle price range change
    const handlePriceRangeChange = (newRange) => {
        setSelectedRange(true);
        setPriceRange(newRange);
    };

    function toggleSliderVisible() {
        setSliderIsVisible((visible) => !visible);
    }

    return (
        <>
            <div className={classes["center"]}>
                <h1>SKINCARE</h1>
                <p>
                    From daily rituals to targeted anti-aging care, discover the
                    best in plant-based skincare, powered by nature's most
                    effective ingredients.
                </p>
            </div>

            <p className={classes["tabs-container"]}>
                <button onClick={() => updateCategoryInURL("Face")}>
                    Face
                </button>
                <button onClick={() => updateCategoryInURL("Body")}>
                    Body
                </button>
                <button onClick={() => updateCategoryInURL("Sun")}>Sun</button>
                <button onClick={() => updateCategoryInURL("Men")}>Men</button>
                <button onClick={() => navigate("/skincare")}>View All</button>
            </p>

            {/* Sorting and Filtering Controls */}
            <div className={classes["filters"]}>
                <div className={classes["sort-options"]}>
                    {/* Sorting Dropdown */}
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
                        onClick={toggleSliderVisible}
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
                            step={5} // You can adjust the step size here
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
                            </span>{" "}
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

            <div className={classes["products-container"]}>
                {currentProducts.map((product) => (
                    <ProductItem
                        key={product.product_id}
                        product={product}
                        openModal={openModal}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
            />

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}