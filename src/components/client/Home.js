import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

export default function Home() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const [sortOption, setSortOption] = useState(""); // State for sorting option
    const [minPrice, setMinPrice] = useState(0); // State for minimum price filter
    const [maxPrice, setMaxPrice] = useState(1000); // State for maximum price filter
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]); // State for the range slider

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 3; // Number of products per page

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    useEffect(() => {
        axios.get("http://localhost/project/collections/all").then((res) => {
            setProducts(res.data.data);
            setFilteredProducts(res.data.data);
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

    // Handle price range slider changes
    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        if (name === "min") {
            setPriceRange([Number(value), priceRange[1]]);
        } else {
            setPriceRange([priceRange[0], Number(value)]);
        }
    };

    return (
        <>
            <h1 className="center">All products</h1>

            {/* Sorting and Filtering Controls */}
            <div className="filters center">
                {/* Sorting Dropdown */}
                <label htmlFor="sort">Sort by: </label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="price_asc">Price (Low to High)</option>
                    <option value="price_desc">Price (High to Low)</option>
                </select>

                {/* Price Range Filter */}
                <div className="price-filter">
                    <label htmlFor="min-price">
                        Min Price: {formatter.format(priceRange[0])}
                    </label>
                    <input
                        id="min-price"
                        type="range"
                        name="min"
                        min="0"
                        max="1000"
                        value={priceRange[0]}
                        onChange={handleRangeChange}
                    />
                    <label htmlFor="max-price">
                        Max Price: {formatter.format(priceRange[1])}
                    </label>
                    <input
                        id="max-price"
                        type="range"
                        name="max"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={handleRangeChange}
                    />
                    <div>
                        Selected range: {formatter.format(priceRange[0])} -{" "}
                        {formatter.format(priceRange[1])}
                    </div>
                </div>
            </div>

            <div className="items-container">
                {currentProducts.map((item) => (
                    <div className="item-card center" key={item.product_id}>
                        <Link to={"/products/" + item.product_id}>
                            <img
                                src={
                                    item.product_images
                                        ? item.product_images.split(",")[0]
                                        : ""
                                }
                                alt={item.product_name}
                                className="item-image"
                            />
                            <h4 className="item-title">{item.product_name}</h4>
                        </Link>

                        <p className="item-price">
                            {formatter.format(item.price)}
                        </p>
                        <button
                            className="cart-button"
                            onClick={() => openModal(item)} // Open modal with product info
                        >
                            Quick View
                        </button>
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />
            {/* Pagination Controls */}
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

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}
