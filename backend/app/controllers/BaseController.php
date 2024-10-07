<?php

class BaseController
{
    const VIEW_PATH = "./app/views/";
    const MODEL_PATH = "./app/models/";

    public function view($fileName, $data = [])
    {
        $filePath = self::VIEW_PATH . $fileName . ".php";
        if (file_exists($filePath)) {
            return require_once $filePath;
        } else {
            echo "File not exist";
        }
    }

    public function initModel($modelName, $conn)
    {
        try {

            $file = self::MODEL_PATH . $modelName . ".php";
            if (file_exists($file)) {

                include_once($file);
                if (class_exists($modelName)) {
                    $modelInstance = new $modelName($conn);
                    return $modelInstance;
                }
            }
            return null;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    public function viewData($data)
    {
        echo "<pre>";
        var_dump($data);
        echo "</pre>";
    }

    public function FactoryMessage($type = "info", $message = "", $data = null)
    {
        $arr = [
            "type" => $type,
            "message" => $message
        ];
        if ($data != null) {
            $arr["data"] = $data;
        }
        echo json_encode($arr);
    }
}
