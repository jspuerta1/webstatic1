<?php
//CAMPOS DEL FORMULARIO
// $nombre = $_POST['nombre'];
// $telefono = $_POST['telefono'];
// $email = $_POST['email'];
// $descripcion_contacto = $_POST['descripcion_contacto'];
///CORREO DESTINATARIO
// $destinatario = "jpuerta@codigodigital.co";
// $asunto = "Solicitud de contacto";
//INFROMACION DEL CLIENTE 
// $informacion = "De: $nombre \n";
// $informacion .= "Telefono: $telefono \n";
// $informacion .= "Email: $email \n";
// $informacion .= "Mensaje: $descripcion_contacto \n";
///ENVIADO MENSAJE
// mail($destinatario, $asunto, $informacion);

// require (__DIR__). "/../datos/usuarioDatos.php";
var_dump('entre');
abstract class formContactAbstract {
    protected function jsonReturn($estado, $mensaje)
    {
        echo json_encode(array('estado' => $estado, 'msg' => $mensaje));
        exit();
    }
}

class formContactLogica extends formContactAbstract
{
    public function sendFormLogica($data)
    {
        if (isset($data)) {
            $estado = 1;
            $m = 'si trae datos';
            $this->jsonReturn($estado, $m);
        } else {
            $estado = -1;
            $m = 'no trae datos';
            $this->jsonReturn($estado, $m);
        }
    }
}