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


    public function createNewProduct($o_product) {}
}
