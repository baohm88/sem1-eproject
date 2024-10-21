import axios from "axios";
import React, { useEffect, useState } from "react";

import Banner from "./home/Banner";
import OnlineBenefits from "./home/OnlineBenefits";
import ProductCategories from "./home/ProductCategories";
import ProductTabs from "./home/ProductTabs";
import ExclusiveServices from "./home/ExclusiveServices";
import Commitments from "./home/Commitments";
import PaymentMethods from "./home/PaymentMethods";

export default function Home() {
    // const [products, setProducts] = useState([]);
    const [forYouProducts, setForYouProducts] = useState([]);
    const [giftProducts, setGiftProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    // fetch products from db initially
    useEffect(() => {
        axios.get("http://localhost/project/collections/all").then((res) => {
            const data = res.data.data;
            setForYouProducts(
                data.filter((product) => product.note === "for-you")
            );
            setGiftProducts(data.filter((product) => product.note === "gift"));
            setNewProducts(data.filter((product) => product.note === "new"));

            document.title = "Clarins Store";
        });
    }, []);

    const [activeTab, setActiveTab] = useState("just-for-you");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div>
                <Banner />
                <OnlineBenefits />
                <ProductCategories />
                <ProductTabs
                    activeTab={activeTab}
                    handleTabClick={handleTabClick}
                    forYouProducts={forYouProducts}
                    newProducts={newProducts}
                    giftProducts={giftProducts}
                />
                <ExclusiveServices />
                <Commitments />
                <PaymentMethods />
            </div>
        </>
    );
}
