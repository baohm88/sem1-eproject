<?php
class BaseModel
{

    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function create()
    {
        echo "123";
    }
}
