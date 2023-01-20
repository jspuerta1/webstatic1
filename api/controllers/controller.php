<?php
//Arreglo para dar formato de onjeto a un array
$data = json_decode(json_encode($_POST));
//switch case / method
if (isset($data->method)) {
    switch ($data->method) {
        case 'send':
            require (__DIR__) . "/../class/controllerClass.php";
            $formContactCtrl = new controller();
            $formContactCtrl->sendForm($data);
            break;
        case 'contador':
            require (__DIR__) . "/../class/controllerClass.php";
            $formContactCtrl = new controller();
            $formContactCtrl->contador($data);
            break;
    }
}
