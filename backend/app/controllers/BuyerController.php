<?php
include_once("./app/controllers/ValidateController.php");
class BuyerController extends ValidateController
{
    private $__id, $__email, $__firstName, $__isActive, $__password, $__userName, $__lastName, $__dob, $__phone, $__address, $__buyerImage;

    public function __construct()
    {
        // echo "vao r nhe";
    }

    public function set_user_id($id)
    {
        $validatedId = $this->validate('id', $id);
        if ($validatedId != null) {
            $this->__id = $id;
            return $this->get_user_id();
        }
        return null;
    }

    public function get_user_id()
    {
        if (!empty($this->__id)) {
            return $this->__id;
        }
        return null;
    }
    public function set_email($email)
    {
        if ($email != null) {
            $this->__email = $email;
            return $this->get_username();
        } else {
            return null;
        }
    }

    public function get_email()
    {
        return $this->__email;
    }


    public function set_is_active($active)
    {
        if ($active != null) {
            $this->__isActive = $active;
            return $this->get_username();
        } else {
            return null;
        }
    }

    public function get_is_active()
    {
        return $this->__isActive;
    }



    public function set_username($name)
    {
        $validatedUserName = $this->validate("username", $name);
        if ($validatedUserName != null) {
            $this->__userName = $name;
            return $this->get_username();
        } else {
            return null;
        }
    }

    public function get_username()
    {
        return $this->__userName;
    }

    public function set_password($password)
    {
        $this->__password = $password;
        return $this->get_password();
    }

    public function get_password()
    {
        return $this->__password;
    }

    public function set_first_name($name)
    {
        $validatedName = $this->validate("name", $name);
        if ($validatedName != null) {
            $this->__firstName = $name;
            return $this->get_first_name();
        } else {
            return null;
        }
    }

    public function get_first_name()
    {
        return $this->__firstName;
    }

    public function set_last_name($name)
    {
        $validatedName = $this->validate("name", $name);
        if ($validatedName != null) {
            $this->__lastName = $name;
            return $this->get_last_name();
        }
        return null;
    }

    public function get_last_name()
    {
        return $this->__lastName;
    }

    public function set_dob($dob)
    {
        $validatedDob = $this->validate("age", $dob);
        if ($validatedDob != null) {
            $this->__dob = $dob;
            return $this->get_dob();
        } else {
            return null;
        }
    }

    public function get_dob()
    {
        return $this->__dob;
    }

    public function set_phone($phone)
    {
        $validatedPhone = $this->validate("phone", $phone);
        if ($validatedPhone != null) {
            $this->__phone = $phone;
            return $this->get_phone();
        } else {
            return null;
        }
    }
    public function get_phone()
    {
        return $this->__phone;
    }
    public function set_address($address)
    {
        $validatedAddress = $this->validate("address", $address);
        if ($validatedAddress != null) {
            $this->__address = $address;
            return $this->get_address();
        } else {
            return null;
        }
    }
    public function get_address()
    {
        return $this->__address;
    }
    public function set_buyer_image($picture)
    {

        $this->__buyerImage = $picture;
        return $this->get_buyer_image();
    }
    public function get_buyer_image()
    {
        return $this->__buyerImage;
    }
}
