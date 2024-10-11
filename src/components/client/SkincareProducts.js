import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

export default function SkincareProducts() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const location = useLocation(); // Get the current location (URL)
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1); // For tracking the current page
    const productsPerPage = 3; // Number of products per page

    useEffect(() => {
        axios
            .get("http://localhost/project/collections/skincare")
            .then((res) => {
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
            pathname: "/skincare",
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

    return (
        <>
            <div className="center">
                <h1>SKINCARE</h1>
                <p>
                    From daily rituals to targeted anti-aging care, discover the
                    best in plant-based skincare, powered by nature's most
                    effective ingredients.
                </p>
            </div>

            <p className="tabs-container center">
                <span onClick={() => updateCategoryInURL("Face")}>Face</span>
                <span onClick={() => updateCategoryInURL("Body")}>Body</span>
                <span onClick={() => updateCategoryInURL("Sun")}>Sun</span>
                <span onClick={() => updateCategoryInURL("Men")}>Men</span>
                <span onClick={() => navigate("/skincare")}>View All</span>{" "}
                {/* Reset to show all items */}
            </p>
            <div className="items-container">
                {currentProducts.map((item) => {
                    const formatter = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    });

                    return (
                        <div className="item-card center" key={item.product_id}>
                            <Link to={"/"}>
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
                            <button className="cart-button">Quick View</button>
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
                    Previous
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
                    Next
                </button>
            </div>
        </>
    );
}
