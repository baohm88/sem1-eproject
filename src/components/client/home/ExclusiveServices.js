import React from "react";
import ExclusiveServiceItem from "./ExclusiveServiceItem"; // Importing the item component
import classes from "./ExclusiveServices.module.css";

const ExclusiveServices = () => {
    const services = [
        {
            id: 1,
            imgSrc: "CBA_Services_Carousel_Gift_Card_01.jpg",
            title: "Gift Cards",
            description:
                "Take the guesswork out of gifting, and let them choose their favorites.",
            link: "/gift-cards",
            linkText: "SHOP NOW",
        },
        {
            id: 2,
            imgSrc: "CBA_HP_Pushs-Carousel-292x292_CLUB-CLARINS-2_INTE.jpg",
            title: "Club Clarins",
            description:
                "Earn 10 points per dollar and redeem for rewards.",
            link: "/club-clarins",
            linkText: "LEARN MORE",
        },
        {
            id: 3,
            imgSrc: "Subscription-service-carousel.webp",
            title: "Subscription Service",
            description:
                "Enjoy 10% off, free shipping, and 3 free samples with recurring orders.",
            link: "/subscription",
            linkText: "LEARN MORE",
        },
        {
            id: 4,
            imgSrc: "live-consultation-2024-CLP.jpg",
            title: "Live Consultation",
            description:
                "Connect with a Beauty Coach for a complimentary consultation.",
            link: "/consultation",
            linkText: "BOOK NOW",
        },
    ];

    return (
        <div className={classes["exclusive-services-container"]}>
            <h2>Our exclusive services</h2>
            <p>Created to make your life more beautiful</p>
            <div className={classes["services-container"]}>
                {services.map((service) => (
                    <ExclusiveServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ExclusiveServices;
