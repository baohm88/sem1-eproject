import { createContext } from "react";
import { useAuthCart } from "../hooks/useAuthCart";
import { useModal } from "../hooks/useModal";

// Create the UserContext
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

// Define the UserProvider component
export const UserProvider = ({ children }) => {
    const {
        user,
        setUser,
        handleLogOut,
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
    } = useAuthCart();

    const { isModalOpen, selectedProduct, openModal, closeModal } = useModal();

    const ctxValue = {
        user,
        setUser,
        handleLogOut,
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
        <UserContext.Provider value={ctxValue}>{children}</UserContext.Provider>
    );
};
