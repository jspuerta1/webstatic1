<?php

$data = json_decode(file_get_contents("php://input"));
if (isset($_POST["data"])) {
    $data = json_decode($_POST["data"]);
}

if(isset($data->method)){
    switch($data->method){
        case 'send':
            require  (__DIR__). "/../models/logica/formContactLogica.php";
            $formContactCtrl = new formContactLogica();
            $formContactCtrl->sendFormLogica($data);
            break;
    }
}