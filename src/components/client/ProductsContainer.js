import { useState } from "react";
import ProductItem from "./ProductItem"; // Assuming you have a ProductItem component
import Pagination from "../UI/Pagination";
import Modal from "./Modal";

const ProductsContainer = ({ products, itemsPerPage = 4 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Calculate the index of the first and last product on the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const openModal = (product) => {
        setSelectedProduct(product); 
    };

    const closeModal = () => {
        setSelectedProduct(null); 
    };

    return (
        <div className="products-container">
            {currentProducts.map((product) => (
                <ProductItem
                    key={product.product_id}
                    product={product}
                    openModal={openModal}
                />
            ))}

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={(page) => setCurrentPage(page)}
                />
            )}

            {selectedProduct && (
                <Modal product={selectedProduct} onClose={closeModal} />
            )}
        </div>
    );
};

export default ProductsContainer;
