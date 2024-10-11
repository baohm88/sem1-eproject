<?php

class AdminController extends BaseController
{
    private $__conn, $__instanceBaseModel, $__instanceProductModel;

    public function __construct($conn)
    {
        $this->__conn = $conn;
        $this->__instanceBaseModel = $this->initModel("BaseModel", $this->__conn);
        $this->__instanceProductModel = $this->initModel("ProductModel", $this->__conn);
    }
    /**
     * Summary of Users
     * go to the adminBuyerController class
     * @return void
     */
    public function Users() {}


    /**‚
     * Summary of Coupons
     * go to the adminCouponsController
     * @return void
     */
    public function Coupons() {}


    /**
     * Summary of OrderItem
     * go to the order item class 
     * @return void
     */
    public function OrderItem() {}

    /**
     * Summary of Orders
     * go to Orders class 
     * @return void
     */
    public function Orders() {}

    /**
     * Summary of OrderStatus
     * go to the order status class
     * @return void
     */
    public function OrderStatus() {}


    /**
     * Summary of ProductImage
     * Go to the ProductImage class
     * @return void
     */
    public function ProductImage() {}


    /**
     * Summary of ProductRating
     * Go to the ProductRating Class
     * @return void
     */
    public function ProductRating() {}

    /**
     * Summary of Products
     * go to the Products class 
     * @return void
     */
    public function Products()
    {
        if ($_SERVER["REQUEST_METHOD"] === "GET") {
            $product = new CollectionsController($this->__conn);
            $product->all();
        } else if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!empty($this->__instanceBaseModel->checkSomethingExist("Products", "productName", $input["product_name"]))) {
                $this->FactoryMessage("Error", "Product has the same name already exist");
            } else if (empty($this->__instanceBaseModel->checkSomethingExist("ProductsCategories", "id", $input["category"]))) {
                $this->FactoryMessage("Error", "Category doesn't exist");
            } else {
                include_once "./app/controllers/ProductController.php";
                $o_product = new ProductController($this->__conn);
                $o_product = $this->insert_data_to_instance($o_product, $input);
            }
        }
    }

    // public function addNew


    /**
     * Summary of ProductCategories
     * go to the ProductCategories Class
     * @return void
     */
    public function ProductCategories() {}
}
