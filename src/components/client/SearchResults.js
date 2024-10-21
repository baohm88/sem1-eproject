import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "../UI/ProductsContainer";
import useFilterAndSortProducts from "../../hooks/useFilterAndSortProducts";
import SortAndFilter from "../UI/SortAndFilter";

export default function SearchResults() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRange, setPriceRange] = useState([0, 200]);
    const location = useLocation();

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
                <SortAndFilter
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={200}
                />
            </div>
            <div className="total-products">
                <h5>{filteredProducts.length} products</h5>
            </div>

            <ProductsContainer products={filteredProducts} />
        </>
    );
}
