<?php
class ConectionBd extends PDO{
    private static $instance;
    private static $tipo_de_base = 'mysql';
    private static $host = 'localhost';
    private static $nombre_de_base = 'moncho';
    private static $usuario = 'root';
    private static $contrasena = '';
    private static $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    public function __construct()
    {
        try {
            parent::__construct(SELF::$tipo_de_base . ':host=' . SELF::$host . ';dbname=' . SELF::$nombre_de_base, SELF::$usuario, SELF::$contrasena, SELF::$opciones);
        } catch (PDOException $e) {
            echo "conexion", "conecion base datos", $e->getMessage();
            return false;
        } catch (ErrorException $e) {
            echo "conexion", "conecion base datos", $e->getMessage();
            return false;
        }
        catch (Error $e) {
            echo "conexion", "conecion base datos", $e->getMessage();
            return false;
        }
    }

    public static function getInstance(){
        if (!isset(self::$instance)) {
            try {
                if (self::$instance === null) {
                    $ins = new ConectionBd();
                    $ins->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $ins->setAttribute(PDO::ATTR_EMULATE_PREPARES, TRUE);
                    self::$instance = $ins;
                    return self::$instance;
                }
            } catch (PDOException $e) {
                echo "conexion", "conecion base datos", $e->getMessage();
                return false;
            } catch (ErrorException $e) {
                echo "conexion", "conecion base datos", $e->getMessage();
                return false;
            }catch (Error $e) {
                echo "conexion", "conecion base datos", $e->getMessage();
                return false;
            }
        }
        return self::$instance;
    }
}

