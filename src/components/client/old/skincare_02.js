import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import classes from "./SkincareProducts.module.css";
import ProductsContainer from "../ProductsContainer";
import useFilterAndSortProducts from "../../../hooks/useFilterAndSortProducts";

export default function SkincareProducts() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sliderIsVisible, setSliderIsVisible] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Fetch skincare products from the database
    useEffect(() => {
        axios
            .get("http://localhost/project/collections/skincare")
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
            pathname: "/skincare",
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
            {/* ... JSX for rendering filters, tabs, and products ... */}
            <ProductsContainer products={filteredProducts} />
        </>
    );
}
