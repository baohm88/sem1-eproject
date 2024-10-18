// components/OnlineBenefits.js
import React from "react";
import classes from "./OnlineBenefits.module.css";

const OnlineBenefits = () => {
    const benefits = [
        {
            src: "https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw14d9bd9b/Icon_CBA/illustrative-bag-delivery.svg",
            text: "Free shipping with any $50 order",
        },
        {
            src: "https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw4e59dd0e/Icon_CBA/Club%20clarins-2023.svg",
            text: "Earn 10 points per dollar and redeem for rewards",
        },
        {
            src: "https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw1820564d/CLP%20-%20Template/Products%20Samples.png",
            text: "Choose 3 free samples with any order",
        },
        {
            src: "https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwf2d8c037/Icon_CBA/illustrative-products-autoreplenishment.svg",
            text: "Subscribe for 10% off and free shipping",
        },
    ];

    return (
        <div className={classes["online-benefits"]}>
            {benefits.map((benefit, index) => (
                <div className={classes["benefit"]} key={index}>
                    <img src={benefit.src} alt={benefit.text} />
                    <p>{benefit.text}</p>
                </div>
            ))}
        </div>
    );
};

export default OnlineBenefits;
