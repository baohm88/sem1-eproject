import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { formatter } from "../../util/formatter";
import Modal from "./Modal"; // Import the Modal component

export default function SkincareProducts() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // For managing modal product
    const location = useLocation(); // Get the current location (URL)
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 3; // Number of products per page

    useEffect(() => {
        axios.get("http://localhost/project/collections/makeup").then((res) => {
            setItems(res.data.data);
            setFilteredItems(res.data.data); // Show all items initially
        });
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get("category");
        const searchText = params.get("q");

        let filtered = items;

        if (category) {
            filtered = filtered.filter(
                (product) => product.sub_category === category
            );
        }

        if (searchText) {
            filtered = filtered.filter(
                (product) =>
                    (product.product_name &&
                        product.product_name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())) ||
                    (product.description &&
                        product.description
                            .toLowerCase()
                            .includes(searchText.toLowerCase()))
            );
        }

        setFilteredItems(filtered);
    }, [location.search, items]); // Re-run when the URL or items change

    function updateCategoryInURL(category) {
        navigate({
            pathname: "/makeup",
            search: `?category=${category}`,
        });
    }

    // Calculate index range for the products to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredItems.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredItems.length / productsPerPage);

    const openModal = (product) => {
        setSelectedProduct(product); // Set the selected product for the modal
    };

    const closeModal = () => {
        setSelectedProduct(null); // Close the modal by setting the selected product to null
    };

    return (
        <>
            <div className="center">
                <h1>MAKEUP</h1>
                <p>
                    At Clarins, we believe that nature reveals our true beauty.
                    Shop our expert selection of beauty bestsellers for face,
                    eyes and lips, powered by plants.
                </p>
            </div>

            <p className="tabs-container center">
                <button onClick={() => updateCategoryInURL("Face")}>
                    Face
                </button>
                <button onClick={() => updateCategoryInURL("Eyes")}>
                    Eyes
                </button>
                <button onClick={() => updateCategoryInURL("Lips")}>
                    Lips
                </button>
                <button onClick={() => navigate("/makeup")}>View All</button>
                {/* Reset to show all items */}
            </p>
            <div className="items-container">
                {currentProducts.map((item) => {
                    return (
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
                                <h4 className="item-title">
                                    {item.product_name}
                                </h4>
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
                    );
                })}
            </div>
            <br />
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
