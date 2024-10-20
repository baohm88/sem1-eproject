import { useMemo } from "react";

export default function useFilterAndSortProducts(products, queryParams, sortOption, priceRange) {
    // Filtered products based on category, search text, and price range
    const filteredProducts = useMemo(() => {
        let filtered = products;

        // Filter by category
        if (queryParams.category) {
            filtered = filtered.filter(
                (product) => product.sub_category === queryParams.category
            );
        }

        // Filter by search text
        if (queryParams.searchText) {
            const searchTextLower = queryParams.searchText.toLowerCase();
            filtered = filtered.filter(
                (product) =>
                    product.product_name
                        .toLowerCase()
                        .includes(searchTextLower) ||
                    product.product_description
                        .toLowerCase()
                        .includes(searchTextLower)
            );
        }

        // Filter by price range
        filtered = filtered.filter(
            (product) =>
                product.product_price >= priceRange[0] &&
                product.product_price <= priceRange[1]
        );

        // Sort products
        switch (sortOption) {
            case "name_asc":
                filtered.sort((a, b) =>
                    a.product_name.localeCompare(b.product_name)
                );
                break;
            case "name_desc":
                filtered.sort((a, b) =>
                    b.product_name.localeCompare(a.product_name)
                );
                break;
            case "price_asc":
                filtered.sort((a, b) => a.product_price - b.product_price);
                break;
            case "price_desc":
                filtered.sort((a, b) => b.product_price - a.product_price);
                break;
            default:
                break;
        }

        return filtered;
    }, [products, queryParams, sortOption, priceRange]);

    return filteredProducts;
}
