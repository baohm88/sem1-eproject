<?php
class CollectionsController extends BaseController
{
    private $__instanceModel;
    public function __construct($conn)
    {
        $this->__instanceModel = $this->initModel("CollectionsModel", $conn);
    }

    public function all()
    {
        $products = $this->__instanceModel->getAllProducts();
        $this->FactoryMessage("info", "This is product obj", $products);
    }
}
