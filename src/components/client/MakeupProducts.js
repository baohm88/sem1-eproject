import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { formatter } from "../../util/formatter";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "./ProductsContainer";
import useFilterAndSortProducts from "../../hooks/useFilterAndSortProducts";

export default function MakeupProducts() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sliderIsVisible, setSliderIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Fetch makeup products from the database
    useEffect(() => {
        let isMounted = true; // Flag to track if component is mounted

        const fetchProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost/project/collections/makeup"
                );
                if (isMounted) {
                    setProducts(res.data.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                // Optionally, you could set an error state here
            }
        };

        fetchProducts();

        return () => {
            isMounted = false; // Cleanup function
        };
    }, []);

    // Parse URL parameters
    const queryParams = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return {
            category: params.get("category") || "",
            searchText: params.get("q") || "",
        };
    }, [location.search]);

    // Use custom hook to filter and sort products
    const filteredProducts = useFilterAndSortProducts(
        products,
        queryParams,
        sortOption,
        priceRange
    );

    // Update category in the URL
    function updateCategoryInURL(category) {
        navigate({
            pathname: "/makeup",
            search: `?category=${category}`,
        });
    }

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
                {["Face", "Eyes", "Lips"].map((category) => (
                    <button
                        key={category}
                        onClick={() => updateCategoryInURL(category)}
                        className={
                            queryParams.category === category
                                ? classes.active
                                : ""
                        }
                    >
                        {category}
                    </button>
                ))}
                <button
                    onClick={() => navigate("/makeup")}
                    className={!queryParams.category ? classes.active : ""}
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
                            max={200} // Set to the actual maximum price if needed
                            value={priceRange}
                            onChange={handlePriceRangeChange}
                            step={5}
                        />
                    )}
                    {selectedRange && (
                        <p className={classes.selectedRange}>
                            <span
                                onClick={() => {
                                    setPriceRange([0, 200]); // Reset to default
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

            {/* Products Container with Pagination */}
            <ProductsContainer products={filteredProducts} />
        </>
    );
}
