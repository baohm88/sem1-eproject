import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "../UI/ProductsContainer";
import useFilterAndSortProducts from "../../hooks/useFilterAndSortProducts";
import SortAndFilter from "./SortAndFilter";
import CategoryTabs from "./CategoryTabs";

export default function SkincareProducts() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [priceRange, setPriceRange] = useState([0, 200]);
    const location = useLocation();

    // Fetch skincare products from the database
    useEffect(() => {
        let isMounted = true; // Flag to track if component is mounted

        const fetchProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost/project/collections/skincare"
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

    const skincareCategories = ["Face", "Body", "Sun", "Men"];

    return (
        <>
            <div className={classes.center}>
                <h1>SKINCARE</h1>
                <p>
                    From daily rituals to targeted anti-aging care, discover the
                    best in plant-based skincare, powered by nature's most
                    effective ingredients.
                </p>
            </div>

            <CategoryTabs
                categories={skincareCategories}
                selectedCategory={queryParams.category}
                allLabel="View All"
                basePath="/skincare"
            />

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
