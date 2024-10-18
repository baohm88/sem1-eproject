import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component

import classes from "./Home.module.css";
import Button from "../UI/Button";
import ProductItem from "./ProductItem";

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
                {/* Phần banner lớn */}
                <div className={classes["banner"]}>
                    <img
                        src="Local-immersive-DS9-desktop-v2.jpg"
                        alt="Double Serum"
                        className={classes["banner-image"]}
                    />
                    <div className={classes["banner-content"]}>
                        <h2>NEW (R)EVOLUTION DOUBLE SERUM</h2>
                        <p>The power to change your skin's future</p>
                        <p>Just one drop for younger looking skin</p>
                        <button className={classes["discover-button"]}>
                            DISCOVER
                        </button>
                    </div>
                </div>

                {/* Phần ưu đãi online */}
                <div className={classes["online-benefits"]}>
                    <div className={classes["benefit"]}>
                        <img
                            src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw14d9bd9b/Icon_CBA/illustrative-bag-delivery.svg"
                            alt="free shipping"
                        />
                        <p>Free shipping with any $50 order</p>
                    </div>
                    <div className={classes["benefit"]}>
                        <img
                            src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw4e59dd0e/Icon_CBA/Club%20clarins-2023.svg"
                            alt="reward"
                        />
                        <p>Earn 10 points per dollar and redeem for rewards</p>
                    </div>
                    <div className={classes["benefit"]}>
                        <img
                            src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw1820564d/CLP%20-%20Template/Products%20Samples.png"
                            alt="sample"
                        />
                        <p>Choose 3 free samples with any order</p>
                    </div>
                    <div className={classes["benefit"]}>
                        <img
                            src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwf2d8c037/Icon_CBA/illustrative-products-autoreplenishment.svg"
                            alt="autoreplenishment"
                        />
                        <p>Subscribe for 10% off and free shipping</p>
                    </div>
                </div>

                {/* Phần khám phá sản phẩm */}
                <div className={classes["expertise-section"]}>
                    <h1>Your skin. Our expertise.</h1>
                    <p>Discover our plant-powered formulas</p>

                    <div className={classes["product-categories"]}>
                        <div className={classes["category1"]}>
                            <a href="/skincare">
                                <img
                                    src="Highlight_DOUBLE-SERUM_2024.jpg"
                                    alt="Face"
                                    className={classes["category-image"]}
                                />
                            </a>
                            <h3>FACE</h3>
                            <a href="/skincare" className={classes["shop-now"]}>
                                SHOP NOW
                            </a>
                        </div>

                        <div className={classes["category2"]}>
                            <a href="/makeup">
                                <img
                                    src="CBA_HP_Highlight_LIP-OIL-BALM_2024_Cherry-APAC.jpg"
                                    alt="Makeup"
                                    className={classes["category-image"]}
                                />
                            </a>

                            <h3>MAKEUP</h3>
                            <a href="/makeup" className={classes["shop-now"]}>
                                SHOP NOW
                            </a>
                        </div>

                        <div className={classes["category1"]}>
                            <a href="/skincare">
                                <img
                                    src="Body-Fit-Active-Highlight.JPG"
                                    alt="Body"
                                    className={classes["category-image"]}
                                />
                            </a>

                            <h3>BODY</h3>
                            <a href="/skincare" className={classes["shop-now"]}>
                                SHOP NOW
                            </a>
                        </div>

                        <div className={classes["category2"]}>
                            <a href="/skincare">
                                <img
                                    src="CBA_HP_Highlights_Lifestyle_Body_Sun3.jpg"
                                    alt="Sun"
                                    className={classes["category-image"]}
                                />
                            </a>

                            <h3>SUN</h3>
                            <a href="/skincare" className={classes["shop-now"]}>
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Beutymusthaves*/}

            <div className={classes["beauty-must-haves"]}>
                <h2>Beauty must-haves</h2>
                <p>Discover our iconic products</p>
                <div className={classes["product-tabs"]}>
                    <button
                        className={
                            classes[
                                `tab ${
                                    activeTab === "just-for-you" ? "active" : ""
                                }`
                            ]
                        }
                        onClick={() => handleTabClick("just-for-you")}
                    >
                        Just for You
                    </button>
                    <button
                        className={
                            classes[
                                `tab ${
                                    activeTab === "whats-new" ? "active" : ""
                                }`
                            ]
                        }
                        onClick={() => handleTabClick("whats-new")}
                    >
                        What's New
                    </button>
                    <button
                        className={
                            classes[
                                `tab ${
                                    activeTab === "online-exclusives"
                                        ? "active"
                                        : ""
                                }`
                            ]
                        }
                        onClick={() => handleTabClick("online-exclusives")}
                    >
                        Online Exclusives
                    </button>
                </div>

                {/* Hiển thị các sản phẩm dựa trên tab đang được chọn */}
                {activeTab === "just-for-you" && (
                    <div className={classes["product-slider"]}>
                        {forYouProducts.map((product) => (
                            <ProductItem
                                product={product}
                                openModal={openModal}
                            />
                        ))}
                    </div>
                )}

                {activeTab === "whats-new" && (
                    <div className={classes["product-slider"]}>
                        {newProducts.map((product) => (
                            <ProductItem
                                product={product}
                                openModal={openModal}
                            />
                        ))}
                    </div>
                )}

                {activeTab === "online-exclusives" && (
                    <div className={classes["product-slider"]}>
                        {giftProducts.map((product) => (
                            <ProductItem
                                product={product}
                                openModal={openModal}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div>
                <div className={classes["exclusive-services"]}>
                    <h2>Our exclusive services</h2>
                    <p>Created to make your life more beautiful</p>
                    <div className={classes["services-grid"]}>
                        <div className={classes["service"]}>
                            <img
                                src="CBA_Services_Carousel_Gift_Card_01.jpg"
                                alt="Gift Cards"
                            />
                            <h3>Gift Cards</h3>
                            <p>
                                Take the guesswork out of gifting, and let them
                                choose their favorites.
                            </p>
                            <a
                                href="/gift-cards"
                                className={classes["learn-more"]}
                            >
                                SHOP NOW
                            </a>
                        </div>
                        <div className={classes["service"]}>
                            <img
                                src="CBA_HP_Pushs-Carousel-292x292_CLUB-CLARINS-2_INTE.jpg"
                                alt="Club Clarins"
                            />
                            <h3>Club Clarins</h3>

                            <p>
                                Earn 10 points per dollar and redeem for
                                rewards.
                            </p>
                            <a
                                href="/club-clarins"
                                className={classes["learn-more"]}
                            >
                                LEARN MORE
                            </a>
                        </div>
                        <div className={classes["service"]}>
                            <img
                                src="Subscription-service-carousel.webp"
                                alt="Subscription Service"
                            />
                            <h3>Subscription Service</h3>
                            <p>
                                Enjoy 10% off, free shipping, and 3 free samples
                                with recurring orders.
                            </p>
                            <a
                                href="/subscription"
                                className={classes["learn-more"]}
                            >
                                LEARN MORE
                            </a>
                        </div>

                        <div className={classes["service"]}>
                            <img
                                src="live-consultation-2024-CLP.jpg"
                                alt="Live Consultation"
                            />
                            <h3>Live Consultation</h3>
                            <p>
                                Connect with a Beauty Coach for a complimentary
                                consultation.
                            </p>
                            <a
                                href="/consultation"
                                className={classes["learn-more"]}
                            >
                                BOOK NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes["commitments-container"]}>
                <h2>Our Commitments</h2>
                <div className={classes["commitments-grid"]}>
                    <button className={classes["commitment-button"]}>
                        <img
                            src="CSR_Sustainable_Sourcing_v2.png"
                            alt="Sustainable Sourcing & Traceability"
                        />
                        <h3>Sustainable Sourcing & Traceability</h3>
                    </button>
                    <button className={classes["commitment-button"]}>
                        <img
                            src="CSR_Supporting_Actions_v2.png"
                            alt="Charitable Initiatives"
                        />
                        <h3>Charitable Initiatives</h3>
                    </button>

                    <button className={classes["commitment-button"]}>
                        <img src="CSR_EcoDesign_v2.png" alt="Eco Design" />
                        <h3>Eco Design</h3>
                    </button>
                    <button className={classes["commitment-button"]}>
                        <img
                            src="CSR_Made_in_France_v2.png"
                            alt="Made in France"
                        />
                        <h3>Made in France</h3>
                    </button>
                </div>
                <p className={classes["disclaimer"]}>
                    *Excluding: ClarinsMen Foaming Shave Gel / myClarins
                    Clear-out Targets Imperfections / Bright Plus Fresh Ampoule
                    Vitamin C Complex / Nourishing Shampoo bar
                </p>
                <div>
                    <h2>Online advantages</h2>
                    <div className={classes["commitments-grid"]}>
                        <button className={classes["commitment-button"]}>
                            <img
                                src="free-shipping.webp"
                                alt="Sustainable Sourcing & Traceability"
                            />
                            <h3>Free Shipping</h3>
                            <p>with any $50 order</p>
                        </button>

                        <button className={classes["commitment-button"]}>
                            <img
                                src="samples.png"
                                alt="Charitable Initiatives"
                            />
                            <h3>3 Free Samples</h3>
                            <p>with any order</p>
                        </button>
                        <button className={classes["commitment-button"]}>
                            <img src="special-offers.webp" alt="Eco Design" />
                            <h3>Special Offers</h3>
                            <p>all year long</p>
                        </button>
                        <button className={classes["commitment-button"]}>
                            <img
                                src="Club-clarins-2023.webp"
                                alt="Made in France"
                            />
                            <h3>Earn Rewards</h3>
                            <p>$1 = 10 points</p>
                        </button>
                        <button className={classes["commitment-button"]}>
                            <img
                                src="auto-replenishment.webp"
                                alt="Made in France"
                            />

                            <h3>Subscription</h3>
                            <p>10% off and free shipping</p>
                        </button>
                    </div>
                </div>

                <div className={classes["payment-methods"]}>
                    <img src="visa-2.webp" alt="Visa" />
                    <img src="mastercard-2.webp" alt="MasterCard" />
                    <img src="american-express.webp" alt="American Express" />
                    <img src="discover.webp" alt="Discover" />
                    <img src="paypal.webp" alt="PayPal" />
                    <img
                        src="apple-pay-footer-advantage.webp"
                        alt="Apple Pay"
                    />
                    <img src="afterpay.webp" alt="Afterpay" />
                </div>
            </div>

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
}
