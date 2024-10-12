import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes } from "./components/router";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {},
    handleLogOut: () => {},
    cart: [],
    addToCart: () => {},
});

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null; // Parse the saved user
    });
    const [cart, setCart] = useState([]);

    // fetch user from localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user)); // Store as string
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart)); // Parse and set saved cart
        }
    }, []);

    function handleLogOut() {
        setUser(null);
        navigate("/");
    }

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the product is already in the cart
            const existingProduct = prevCart.find(
                (item) => item.product_id === product.product_id
            );

            let updatedCart;
            if (existingProduct) {
                // If the product exists, update the quantity
                updatedCart = prevCart.map((item) =>
                    item.product_id === product.product_id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              total: item.price + item.price,
                          }
                        : item
                );
            } else {
                // If the product does not exist, add it to the cart
                updatedCart = [
                    ...prevCart,
                    { ...product, quantity: 1, total: product.price },
                ];
            }

            // Save the updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(updatedCart));

            return updatedCart;
        });
    };

    // Increment the quantity of a specific product
    const incrementQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.product_id === productId
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                      total: item.price + item.price,
                  }
                : item
        );

        // Update cart state and localStorage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Decrement the quantity of a specific product
    const decrementQuantity = (productId) => {
        const updatedCart = cart
            .map((item) =>
                item.product_id === productId && item.quantity > 1
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          total: item.price - item.price,
                      }
                    : item
            )
            .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

        // Update cart state and localStorage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Remove a specific product from the cart
    const removeItem = (productId) => {
        const updatedCart = cart.filter(
            (item) => item.product_id !== productId
        );

        // Update cart state and localStorage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Clear cart if needed (for checkout, deleting all cart items etc.)
    const clearCart = () => {
        setCart([]); // Clear the cart
        localStorage.removeItem("cart"); // Remove cart from localStorage
    };

    const ctxValue = {
        user,
        setUser: setUser,
        handleLogOut: handleLogOut,
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
    };

    return (
        <>
            <UserContext.Provider value={ctxValue}>
                <Routes>
                    {routes.map((item, index) => {
                        const Page = item.component;
                        const Layout = item.layout;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;
