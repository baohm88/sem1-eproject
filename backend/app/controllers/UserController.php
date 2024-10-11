<?php
include_once "BuyerController.php";
class UserController extends BaseController
{
    private $__instanceUser, $__instanceModel;
    public function __construct($conn)
    {
        session_start();
        $this->__instanceModel = $this->initModel('UserModel', $conn);
        $this->__instanceUser = new BuyerController();
    }


    public function register()
    {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $input = json_decode(file_get_contents('php://input'), true);
            $this->__instanceUser->set_username($input["username"]);
            if (!empty($this->__instanceModel->checkUserExist($this->__instanceUser))) {
                $this->FactoryMessage("error", "User name already exist");
            } else {
                $this->__instanceUser->set_password($input["password"]);
                $this->__instanceUser->set_email($input["email"]);
                $this->__instanceUser->set_first_name($input['first_name']);
                $this->__instanceUser->set_last_name($input['last_name']);
                $this->__instanceUser->set_dob($input['dob']);
                $this->__instanceUser->set_phone($input['phone']);
                $this->__instanceUser->set_address($input['address']);
                $this->__instanceUser->set_user_image($input['user_image']);
                $this->__instanceModel->createNewUser($this->__instanceUser);
                if (empty($this->__instanceModel->checkUserExist($this->__instanceUser))) {
                    $this->FactoryMessage("error", "Account Not Yet Created");
                } else {
                    $this->FactoryMessage("success", "Account Created");
                }
            }
        }
    }

    public function login()
    {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $input = json_decode(file_get_contents('php://input'), true);
            $this->__instanceUser->set_username($input["username"]);
            $this->__instanceUser->set_password($input["password"]);
            $data = $this->__instanceModel->checkUserExist($this->__instanceUser);
            //* remove password field on the return value
            unset($data["password"]);
            if ($data != null && $data["user_id"] != null) {
                $_SESSION["username"] = $this->__instanceUser->get_username();
                $this->FactoryMessage("success", "Login successfully", $data);
            } else {
                $this->FactoryMessage("error", "Login Failed", $data);
            }
        }
    }
    public function logout()
    {
        if (isset($_SESSION['username'])) {
            $_SESSION['username'] = null;
            session_destroy();
            $this->FactoryMessage("success", "logout success fully");
        } else {
            $this->FactoryMessage("error", "not login yet to logout");
        }
    }

    public function profile()
    {
        if ($_SERVER["REQUEST_METHOD"] === "GET") {
            $inputs = json_decode(file_get_contents('php://input'), true);
            $this->__instanceUser->set_user_id($inputs['user_id']);
            $aUserData = $this->__instanceModel->getUserData($this->__instanceUser);
            if ($aUserData != false) {
                $this->FactoryMessage("success", "Get User Info Successfully", $aUserData);
            } else {
                $this->FactoryMessage("error", "User data not exist");
            }
        } else if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $inputs = json_decode(file_get_contents('php://input'), true);
            foreach ($inputs as $key => $value) {
                $method_name = "set_" . $key;
                $this->__instanceUser->$method_name($value);
            }
            $this->__instanceModel->changeUserData($this->__instanceUser);
        }
    }

    public function change_password()
    {
        $inputs = json_decode(file_get_contents('php://input'), true);
        $old_password = $inputs["old_password"];
        $new_password = $inputs["new_password"];
        $this->__instanceUser->set_old_password($old_password);
        $this->__instanceUser->set_new_password($new_password);
        $this->__instanceUser->set_user_id($inputs["user_id"]);

        if ($old_password == $new_password) {
            $this->FactoryMessage("error", "Your new password can't be the same with your old Password");
        } else if ($this->__instanceModel->checkPasswordCorrect($this->__instanceUser)) {
            $user_id = $inputs["user_id"];
            $this->__instanceUser->reset_properties();
            $this->__instanceUser->set_password($new_password);
            $this->__instanceUser->set_user_id($user_id);
            $this->__instanceModel->changeUserData($this->__instanceUser);
        } else {
            $this->FactoryMessage("error", "Old Password Incorrect");
        }
    }
}
