import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "../UI/ProductsContainer";
import useFilterAndSortProducts from "../../hooks/useFilterAndSortProducts";
import SortAndFilter from "../UI/SortAndFilter";
import CategoryTabs from "../UI/CategoryTabs";

export default function MakeupProducts() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRange, setPriceRange] = useState([0, 500]);
    const location = useLocation();

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

    const makeupCategories = ["Face", "Eyes", "Lips"];

    return (
        <>
            <div className={classes.center}>
                <h1>MAKEUP</h1>
                <p>
                    <p>
                        At Clarins, we believe that nature reveals our true
                        beauty. Shop our expert selection of beauty bestsellers
                        for face, eyes, and lips, powered by plants.
                    </p>
                </p>
            </div>

            <CategoryTabs
                categories={makeupCategories}
                selectedCategory={queryParams.category}
                allLabel="View All"
                basePath="/makeup"
            />

            <div className={classes.filters}>
                <SortAndFilter
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={500}
                />
            </div>

            <div className="total-products">
                <h5>{filteredProducts.length} products</h5>
            </div>
            <ProductsContainer products={filteredProducts} itemsPerPage={8} />
        </>
    );
}
