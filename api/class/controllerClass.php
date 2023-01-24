<?php
//require de la conexion a la DB
require_once (__DIR__) . '/datos/conexion.php';
//class Controller abstract ------------------
abstract class ControllerDB
{
    //function para instanciar la conexión a la BD
    private $connect;
    function __construct()
    {
        $this->connect = new ConectionBd();
    }
    //function jsonReturn para retornar una respuesta
    protected function jsonReturnLogica($estado, $mensaje)
    {
        echo json_encode(array('estado' => $estado, 'msg' => $mensaje));
        exit();
    }
    //query info experiencia
    public function contadorDB()
    {
        $contador = $this->connect->getInstance()->prepare("SELECT * FROM info_experiencia");
        $contador->execute();
        return  $contador;
    }
    //query info contacto
    public function infoContactDB()
    {
        $contador = $this->connect->getInstance()->prepare("SELECT * FROM info_contacto");
        $contador->execute();
        return  $contador;
    }
}
//class Controller --------------
class controller extends ControllerDB
{
    //function para validar el form de contacto
    public function sendForm($data)
    {
        try {
            if ($data->nombres == NULL || $data->telefono == NULL || $data->email == NULL || $data->descripcion == NULL) {
                //respuesta de estado de la function
                $estado = -1;
                $mensaje = 'llene el formulario de contacto completo';
                $this->jsonReturnLogica($estado, $mensaje);
            } else {
                //Correo y asunto
                $destinatario = "johanpuerta86@gmail.com";
                $asunto = "Solicitud de contacto";
                //Cuerpo de trabajo del correo 
                $informacion = "De: $data->nombres \n";
                $informacion .= "Telefono: $data->telefono \n";
                $informacion .= "Email: $data->email \n";
                $informacion .= "Mensaje: $data->descripcion \n";
                ///Envío de la solicitud de contacto
                mail($destinatario, $asunto, $informacion);
                //respuesta de estado de la function
                $estado = 1;
                $mensaje = 'correo enviado correctamente';
                $this->jsonReturnLogica($estado, $mensaje);
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    //function para almacenar los valores de la experiencia
    public function contador($data)
    {
        try {
            if ($data->method === 'contador') {
                $consulta = $this->contadorDB($data);
                $response = new stdClass();
                $response = $consulta->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($response);
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    //function para almacenar los valores de la experiencia
    public function infoContact($data)
    {
        try {
            if ($data->method === 'infoContacto') {
                $consulta = $this->infoContactDB($data);
                $response = new stdClass();
                $response = $consulta->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($response);
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
