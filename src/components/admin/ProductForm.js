import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductForm() {
    const [product, setProduct] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost/project/products/product/?product_id" + id)
            .then((res) => {
                // setProduct(res.data.data);
                console.log(res);
            });
    }, [id]);

    console.log(product);

    return (
        <form>
            <h1>Update Product {id}</h1>
        </form>
    );
}
