<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
require_once "vendor/autoload.php";
//PHPMailer Object
$mail = new \PHPMailer\PHPMailer\PHPMailer();

$modelo = $_REQUEST['modelo'];
$nombres = $_REQUEST['nombres'];
$email = $_REQUEST['email'];
$celular = $_REQUEST['celular'];
$mensaje = $_REQUEST['mensaje'];
$ciudad = $_REQUEST['ciudad'];


if($celular){
//Luego tenemos que iniciar la validación por SMTP:
    try {
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp.sendgrid.net"; // A RELLENAR. Aquí pondremos el SMTP a utilizar. Por ej. mail.midominio.com
        $mail->Username = "solucionsoftsas"; // A RELLENAR. Email de la cuenta de correo. ej.info@midominio.com La cuenta de correo debe ser creada previamente.
        $mail->Password = "JESUS.rincon9"; // A RELLENAR. Aqui pondremos la contraseña de la cuenta de correo
        $mail->Port = 587; // Puerto de conexión al servidor de envio.
        $mail->From = "pagina@subarutourvirtual.com"; // A RELLENARDesde donde enviamos (Para mostrar). Puede ser el mismo que el email creado previamente.
        $mail->FromName = "Tour Virtual subarutourvirtual.com"; //A RELLENAR Nombre a mostrar del remitente.
        $mail->AddAddress("jesuserrincon@gmail.com"); // Esta es la dirección a donde enviamos
        $mail->AddAddress("contacto_subaru@didacol.com"); // Esta es la dirección a donde enviamos
        $mail->IsHTML(true); // El correo se envía como HTML
        $mail->Subject = "Contacto Tour Virtual Subaru"; // Este es el titulo del email.
        $body = "";
        $body .= "Modelo: ".$modelo."<br/>";
        $body .= "Nobres: ".$nombres."<br/>";
        $body .= "Email: ".$email."<br/>";
        $body .= "Celular: ".$celular."<br/>";
        $body .= "Ciudad: ".$ciudad."<br/>";
        $body .= "Mensaje: ".$mensaje."<br/>";

        $mail->Body = $body;

        $exito = $mail->Send(); // Envía el correo.
        if($exito){
            header('Location: index.php?Error=1');
        }else{
            header('Location: index.php?Error=2');
        }
    } catch (phpmailerException $e) {
        echo $e->errorMessage(); //Pretty error messages from PHPMailer
    } catch (Exception $e) {
        echo $e->getMessage(); //Boring error messages from anything else!
    }


}else{
    header('Location: index.php?Error=3');
}