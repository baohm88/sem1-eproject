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
    incrementQuantity: () => {},
    decrementQuantity: () => {},
    removeItem: () => {},
    clearCart: () => {},
    openModal: false,
    closeModal: () => {},
    isModalOpen: () => {},
    selectedProduct: null,
});

function App() {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null; // Parse the saved user
    });
    const [cart, setCart] = useState([]);

    // fetch user from localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user)); // Store as string
            // Clear the cart if a new user logs in
            setCart([]);
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
        if (window.confirm("Are you sure you want to log out?")) {
            setUser(null);
            navigate("/");
        }
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
                              total: item.product_price * (item.quantity + 1),
                          }
                        : item
                );
            } else {
                // If the product does not exist, add it to the cart
                updatedCart = [
                    ...prevCart,
                    { ...product, quantity: 1, total: product.product_price },
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
                      total: item.product_price * (item.quantity + 1),
                  }
                : item
        );

        // Update cart state and localStorage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decrementQuantity = (productId) => {
        const updatedCart = cart
            .map((item) => {
                if (item.product_id === productId) {
                    // Decrement quantity if greater than 1
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            total: item.product_price * (item.quantity - 1),
                        };
                    } else {
                        // Return null for items to be removed
                        return null;
                    }
                }
                return item;
            })
            .filter((item) => item !== null); // Remove items where we returned null

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

    const openModal = (product) => {
        setSelectedProduct(product); // Set the selected product when opening the modal
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null); // Reset the selected product
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
        openModal,
        closeModal,
        isModalOpen,
        selectedProduct,
    };

    return (
        <>
            <UserContext.Provider value={ctxValue}>
                <Routes>
                    {routes.map(
                        ({ path, component: Component, layout: Layout }) => {
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    }
                                />
                            );
                        }
                    )}
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;
