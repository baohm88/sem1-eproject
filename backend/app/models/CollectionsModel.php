<?php
class CollectionsModel
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function getAllProducts($limit = 10, $offset = 0)
    {
        $startFrom = $offset * $limit;
        $sql  = "SELECT * FROM Products LIMIT :limit OFFSET :offset";
        $stmt = $this->__conn->prepare($sql);
        $stmt->bindParam(":limit", $limit, PDO::PARAM_INT);
        $stmt->bindParam(":offset", $startFrom, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
