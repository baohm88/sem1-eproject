import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthCart = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setCart([]); // Clear cart for new users
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const handleLogOut = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            setUser(null);
            navigate("/");
        }
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.product_id === product.product_id
            );
            let updatedCart;
            if (existingProduct) {
                updatedCart = prevCart.map((item) =>
                    item.product_id === product.product_id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              total: item.product_price * (item.quantity + 1),
                          }
                        : item
                );
            } else {
                updatedCart = [
                    ...prevCart,
                    { ...product, quantity: 1, total: product.product_price },
                ];
            }
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const incrementQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.product_id === productId
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                      total: item.product_price * (item.quantity + 1),
                  }
                : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decrementQuantity = (productId) => {
        const updatedCart = cart
            .map((item) => {
                if (item.product_id === productId) {
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            total: item.product_price * (item.quantity - 1),
                        };
                    } else {
                        return null;
                    }
                }
                return item;
            })
            .filter((item) => item !== null);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter(
            (item) => item.product_id !== productId
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return {
        user,
        setUser,
        handleLogOut,
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
    };
};
