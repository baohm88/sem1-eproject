<?php
class ProductController extends ValidateController
{

    private $__instanceModel, $__productName, $__price, $__quantityInStock, $__category, $__dateListed = null;
    public function __construct($conn) {}
    public function setProductName($name)
    {
        if ($this->validate('productname', $name) != null) {
            $this->__productName = $name;
            return $this->getProductName();
        }
    }

    public function getProductName()
    {
        if ($this->__productName != null) {
            return $this->__productName;
        }
        return null;
    }
    public function setPrice($price)
    {
        var_dump($this->validate('price', $price));
        die();
        if ($this->validate('price', $price) != null) {
            $this->__price = $price;
            return $this->getPrice();
        }
    }

    public function getPrice()
    {
        if ($this->__price != null) {
            return $this->__price;
        }
        return null;
    }

    public function setQuantityInStock($qty)
    {
        if ($this->validate('qty', $qty) != null) {
            $this->__quantityInStock = $qty;
            return $this->getQuantityInStock();
        }
        return null;
    }

    public function getQuantityInStock()
    {
        if ($this->__quantityInStock != null) {
            return $this->__quantityInStock;
        }
        return null;
    }

    public function setCategory($category)
    {
        if ($this->validate('qty', $category) != null) {
            $this->__category = $category;
            return $this->getCategory();
        }
        return null;
    }


    public function getCategory()
    {
        if ($this->__category != null) {
            return $this->__category;
        }
        return null;
    }

    public function setDateListed($date)
    {
        if ($this->validate('timestamp', $date) != null) {
            $this->__dateListed = $date;
            return $this->getDateListed();
        }
        return null;
    }

    public function getDateListed()
    {
        if ($this->__dateListed != null) {
            return $this->__dateListed;
        }
        return null;
    }
}
