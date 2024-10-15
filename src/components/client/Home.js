import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

import Slider from "rc-slider"; // Import rc-slider
import "rc-slider/assets/index.css"; // Import rc-slider styles

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const [sortOption, setSortOption] = useState(""); // State for sorting option
    const [selectedRange, setSelectedRange] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 200]); // State for the range slider

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
            setProducts(res.data.data);
            setFilteredProducts(res.data.data);

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
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price_desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }

        // Apply price range filter
        sortedProducts = sortedProducts.filter(
            (product) =>
                product.price >= priceRange[0] && product.price <= priceRange[1]
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
                    product.price >= newRange[0] && product.price <= newRange[1]
            )
        );
    };

    return (
        <>
            <h1 className="center">All products</h1>

            {/* Sorting and Filtering Controls */}
            <div className="filters">
                {/* Sorting Dropdown */}
                <label htmlFor="sort">Sort by: </label>
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
            <div className="price-filter">
                <h4>Filter by Price:</h4>
                <Slider
                    range
                    min={0}
                    max={200}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    step={5} // You can adjust the step size here
                />

                {selectedRange && (
                    <p>
                        <button
                            onClick={() => {
                                setPriceRange([0, 200]);
                                setSelectedRange(false);
                            }}
                        >
                            X
                        </button>{" "}
                        {formatter.format(priceRange[0])} -{" "}
                        {formatter.format(priceRange[1])}
                    </p>
                )}
            </div>

            {/* Total Products Count */}
            <div className="total-products">
                <h4>{filteredProducts.length} products</h4>
            </div>

            <div className="products-container">
                {currentProducts.map((product) => (
                    <div
                        className="product-card center"
                        key={product.product_id}
                    >
                        <Link to={"/products/" + product.product_id}>
                            <img
                                src={
                                    product.product_images
                                        ? product.product_images.split(",")[0]
                                        : ""
                                }
                                alt={product.product_name}
                                className="product-image"
                            />
                            <h4 className="product-title">
                                {product.product_name}
                            </h4>
                        </Link>

                        <p className="product-price">
                            {formatter.format(product.price)}
                        </p>
                        <p className="product-price">RATING COUNT</p>
                        <button
                            className="cart-button"
                            onClick={() => openModal(product)} // Open modal with product info
                        >
                            Quick View
                        </button>
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Pagination Controls */}
            {totalPages > 0 && (
                <div className="pagination center">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <IoChevronBackOutline />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={currentPage === i + 1 ? "active" : ""}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <IoChevronForward />
                    </button>
                </div>
            )}

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}
