<?php
class ProductModel
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function checkProductExist($name)
    {
        $sql = "SELECT * FROM Products WHERE productName = :name";
        $stmt = $this->__conn->prepare($sql);
        $stmt->bindValue(":name", $name, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductData($arg)
    {
        $sql = "SELECT 
                    p.product_name,
                    p.price,
                    p.product_description,
                    p.quantity_in_stock,
                    p.main_category,
                    p.sub_category
                FROM Products p
                WHERE p.product_id = :product_id";

        $stmt = $this->__conn->prepare($sql);
        $stmt->bindValue(":product_id", $arg, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductImage($product_id)
    {
        $sql = "SELECT 
                product_image
            FROM ProductImages
            WHERE product_id = :product_id
        ";
        $stmt = $this->__conn->prepare($sql);
        $stmt->bindValue(":product_id", $product_id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductRating($product_id)
    {
        $sql = "SELECT 
                    u.username,
                    pr.rating_date,
                    pr.rating,
                    pr.rating_comment
                FROM 
                    ProductRatings pr
                JOIN 
                    Users u ON pr.user_id = u.user_id
                WHERE 
                    pr.product_id = :product_id;
        ";
        $stmt = $this->__conn->prepare($sql);
        $stmt->bindValue(":product_id", $product_id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createNewProduct($o_product) {}
}
