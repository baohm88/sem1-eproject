<?php
class CollectionsModel extends BaseController
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function getAllProducts($limit = 20, $offset = 0)
    {
        $startFrom = $offset * $limit;
        // $sql  = "SELECT * FROM Products LIMIT :limit OFFSET :offset";
        $sql  = "SELECT p.*, GROUP_CONCAT(pi.product_image) as product_images FROM Products AS p LEFT JOIN ProductImage AS pi ON p.product_id = pi.product_id GROUP BY p.product_id";

        $stmt = $this->__conn->prepare($sql);
        // $stmt->bindParam(":limit", $limit, PDO::PARAM_INT);
        // $stmt->bindParam(":offset", $startFrom, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCollectionProducts($category, $max_price = null, $min_price = null, $order_by = null, $offset = null, $desc = null)
    {
        // $sql = "SELECT * FROM Products WHERE main_category = :main_category";
        $sql  = "SELECT p.*, GROUP_CONCAT(pi.product_image) as product_images FROM Products AS p 
                LEFT JOIN ProductImage AS pi ON p.product_id = pi.product_id 
                WHERE p.main_category = :main_category
                GROUP BY p.product_id";
        $params = [];
        if ($max_price !== null && $min_price !== null) {
            $sql .=  " AND price BETWEEN :min_price AND :max_price";
            $params["min_price"] = $min_price;
            $params["max_price"] = $max_price;
        } else if ($max_price !== null && $min_price == null) {
            $sql .= " AND price <= :max_price";
            $params["max_price"] = $max_price;
        } else if ($max_price  == null && $min_price !== null) {
            $sql .= " AND price >= :min_price";
            $params["min_price"] = $min_price;
        }

        if ($order_by !== null) {
            $allowed_order_columns = ['price', 'name', 'date_listed']; // Add allowed columns here
            if (in_array($order_by, $allowed_order_columns)) {
                if ($order_by == "name") {
                    $order_by = "product_" . $order_by;
                }
                $sql .= " ORDER BY $order_by"; // Directly concatenate after validation
            }
            if ($desc == true) {
                $sql .= " DESC";
            } else {
                $sql .= " ASC";
            }
        }
        if ($offset !== null) {
            $sql .= " OFFSET :offset";
            $params["offset"] = $offset;
        }

        $stmt  = $this->__conn->prepare($sql);
        $stmt->bindValue(":main_category", $category, PDO::PARAM_STR);

        foreach ($params as $param => $value) {
            $stmt->bindValue(":$param", $value, PDO::PARAM_INT);
        }
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
