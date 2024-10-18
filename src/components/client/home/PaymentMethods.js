import React from "react";
import classes from "./PaymentMethods.module.css";

const PaymentMethods = () => {
    return (
        <div className={classes["payment-methods"]}>
            <img src="visa-2.webp" alt="Visa" />
            <img src="mastercard-2.webp" alt="MasterCard" />
            <img src="american-express.webp" alt="American Express" />
            <img src="discover.webp" alt="Discover" />
            <img src="paypal.webp" alt="PayPal" />
            <img src="apple-pay-footer-advantage.webp" alt="Apple Pay" />
            <img src="afterpay.webp" alt="Afterpay" />
        </div>
    );
};

export default PaymentMethods;
