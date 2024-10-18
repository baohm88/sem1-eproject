import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

import classes from "./Home.module.css";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";
import Banner from "./home/Banner";
import OnlineBenefits from "./home/OnlineBenefits";
import ProductCategories from "./home/ProductCategories";
import ProductTabs from "./home/ProductTabs";
import ExclusiveServices from "./home/ExclusiveServices";
import Commitments from "./home/Commitments";
import PaymentMethods from "./home/PaymentMethods";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const [sortOption, setSortOption] = useState(""); // State for sorting option
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]); // State for the range slider
    const [forYouProducts, setForYouProducts] = useState([]);
    const [giftProducts, setGiftProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 4; // Number of products per page

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // fetch products from db initially
    useEffect(() => {
        axios.get("http://localhost/project/collections/all").then((res) => {
            const data = res.data.data;
            setProducts(data);
            setFilteredProducts(data);
            setForYouProducts(
                data.filter((product) => product.note === "for-you")
            );
            setGiftProducts(data.filter((product) => product.note === "gift"));
            setNewProducts(data.filter((product) => product.note === "new"));

            document.title = "Clarins Store";
        });
    }, []);

    // Handle filtering by search text
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchText = params.get("q");

        if (searchText) {
            setFilteredProducts(
                products.filter(
                    (product) =>
                        (product.product_name &&
                            product.product_name
                                .toLowerCase()
                                .includes(searchText.toLowerCase())) ||
                        (product.description &&
                            product.description
                                .toLowerCase()
                                .includes(searchText.toLowerCase()))
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [location.search, products]);

    // Handle sorting
    useEffect(() => {
        let sortedProducts = [...products]; // Sort based on the original product list
        if (sortOption === "name_asc") {
            sortedProducts.sort((a, b) =>
                a.product_name.localeCompare(b.product_name)
            );
        } else if (sortOption === "name_desc") {
            sortedProducts.sort((a, b) =>
                b.product_name.localeCompare(a.product_name)
            );
        } else if (sortOption === "price_asc") {
            sortedProducts.sort((a, b) => a.product_price - b.product_price);
        } else if (sortOption === "price_desc") {
            sortedProducts.sort((a, b) => b.product_price - a.product_price);
        }

        // Apply price range filter
        sortedProducts = sortedProducts.filter(
            (product) =>
                product.product_price >= priceRange[0] &&
                product.product_price <= priceRange[1]
        );

        setFilteredProducts(sortedProducts);
    }, [sortOption, products, priceRange]); // Sort whenever sortOption, products, or price range changes

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
        setFilteredProducts(
            products.filter(
                (product) =>
                    product.product_price >= newRange[0] &&
                    product.product_price <= newRange[1]
            )
        );
    };
    // Quản lý trạng thái tab đang được chọn
    const [activeTab, setActiveTab] = useState("just-for-you");

    // Hàm để chuyển tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    console.log(forYouProducts);

    return (
        <>
            <div className={classes["body-section"]}>
                <Banner />
                <OnlineBenefits />
                <ProductCategories />
                <ProductTabs
                    activeTab={activeTab}
                    handleTabClick={handleTabClick}
                    forYouProducts={forYouProducts}
                    newProducts={newProducts}
                    giftProducts={giftProducts}
                    openModal={openModal}
                />
                <ExclusiveServices />
                <Commitments />
                <PaymentMethods />
            </div>

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}
