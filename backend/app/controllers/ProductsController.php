<?php
class ProductsController extends BaseController
{

    private $__instanceModel;
    public function __construct($conn)
    {
        $this->__instanceModel = $this->initModel("ProductModel", $conn);
    }

    public function product($params)
    {
        try {
            if (ctype_digit($params["product_id"]) && $params["product_id"] > 0) {
                $params["product_id"] = (int)$params["product_id"];
                $data = $this->__instanceModel->getProductData($params["product_id"]);
                if (empty($data)) {
                    throw new InvalidArgumentException("There are none of our products that matched your requirement");
                }
                $data["image"] = $this->__instanceModel->getProductImage($params["product_id"]);
                $data["ratings"] = $this->__instanceModel->getProductRating($params["product_id"]);
                $this->FactoryMessage("success", "This is product data", $data);
            } else {
                throw new InvalidArgumentException("There are none of our products that matched your requirement");
            }
        } catch (Exception $e) {
            $this->FactoryMessage("error", $e->getMessage());
        }
    }
}
