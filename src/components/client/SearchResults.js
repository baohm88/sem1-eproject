import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { formatter } from "../../util/formatter";
import Modal from "./Modal";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "./ProductsContainer"; // Import ProductsContainer
import Pagination from "../UI/Pagination";
import useFilterAndSortProducts from "../../hooks/useFilterAndSortProducts";

export default function SearchResults() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Modal state
    const [sortOption, setSortOption] = useState("");
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sliderIsVisible, setSliderIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const location = useLocation();

    const productsPerPage = 4;

    // Fetch all products from the database
    useEffect(() => {
        axios
            .get("http://localhost/project/collections/all")
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

    // Update document title when the search text or category changes
    useEffect(() => {
        const { searchText, category } = queryParams;
        if (searchText) {
            document.title = `Search Results for '${searchText}'`;
        } else if (category) {
            document.title = `Category: ${category}`;
        } else {
            document.title = "All Products";
        }
    }, [queryParams]);

    // Use custom hook to filter and sort products
    const filteredProducts = useFilterAndSortProducts(
        products,
        queryParams,
        sortOption,
        priceRange
    );

    // Handle price range change
    const handlePriceRangeChange = (newRange) => {
        setSelectedRange(true);
        setPriceRange(newRange);
    };

    return (
        <>
            <div className={classes.center}>
                {/* Display Search Text */}
                {queryParams.searchText ? (
                    <h1>
                        Search results for <i>'{queryParams.searchText}'</i>
                    </h1>
                ) : (
                    <h1>All Products</h1>
                )}
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
                            max={200} // Update based on actual max price
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
                                X&nbsp;
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
