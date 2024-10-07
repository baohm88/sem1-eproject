<?php
class UserModel extends BaseController
{
    private $__conn;
    public function __construct($conn)
    {
        $this->__conn = $conn;
    }

    public function createNewUser($oUser)
    {
        $username   = $oUser->get_username();
        $password   = password_hash($oUser->get_password(), PASSWORD_DEFAULT);
        $firstName  = $oUser->get_first_name();
        $lastName   = $oUser->get_last_name();
        $email      = $oUser->get_email();
        $dob        = $oUser->get_dob();
        $phone      = $oUser->get_phone();
        $address    = $oUser->get_address();
        // $buyerImage = $oUser->get_buyer_image();

        try {

            $sql = "INSERT INTO Buyers (
                userName,
                password,
                firstName,
                lastName,
                email,
                dob,
                phone,
                address
                -- BuyerImage
            ) VALUES (
                :username,
                :password,
                :firstName,
                :lastName,
                :email,
                :dob,
                :phone,
                :address
                -- :BuyerImage
            )";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam("username", $username, PDO::PARAM_STR);
            $stmt->bindParam("password", $password, PDO::PARAM_STR);
            $stmt->bindParam('firstName', $firstName, PDO::PARAM_STR);
            $stmt->bindParam('lastName', $lastName, PDO::PARAM_STR);
            $stmt->bindParam('email', $email, PDO::PARAM_STR);
            $stmt->bindParam('dob', $dob, PDO::PARAM_STR);
            $stmt->bindParam('phone', $phone, PDO::PARAM_STR);
            $stmt->bindParam('address', $address, PDO::PARAM_STR);
            // $stmt->bindParam('BuyerImage', $buyerImage, PDO::PARAM_LOB);
            $stmt->execute();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }

    public function checkUserExist($oUser)
    {
        $username = $oUser->get_username();
        try {
            $sql  = "SELECT * FROM Buyers WHERE userName = :username";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam('username', $username, PDO::PARAM_STR);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!empty($data)) {
                $password = $oUser->get_password();
                if ($password !== null) {

                    $receivedPassword = $data['password'];
                    // $this->viewData($data);
                    $isVerified = password_verify($password, $receivedPassword);
                    if ($isVerified) {
                        return $data;
                    };
                    return null;
                }
                return $data;
            }
            return null;
        } catch (Exception $e) {
            echo "Error checking user: " . $e->getMessage();
        }
    }

    public function getUserData($oUser)
    {
        try {
            $id   = $oUser->get_user_id();
            $sql  = "SELECT * FROM Buyers WHERE buyerId = :id";
            $stmt = $this->__conn->prepare($sql);
            $stmt->bindParam('id', $id, PDO::PARAM_INT);
            $stmt->execute();
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    public function changeUserData($o_user) {}
}
