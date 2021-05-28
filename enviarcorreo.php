<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
require_once "vendor/autoload.php";
//PHPMailer Object
$mail = new \PHPMailer\PHPMailer\PHPMailer();

$name = $_REQUEST['name'];
$lastname = $_REQUEST['lastname'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$identification = $_REQUEST['identification'];
$city = $_REQUEST['city'];


if($phone){
//Luego tenemos que iniciar la validación por SMTP:
    try {
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp-relay.sendinblue.com"; // A RELLENAR. Aquí pondremos el SMTP a utilizar. Por ej. mail.midominio.com
        $mail->Username = "contacto@solucionsoft.com"; // A RELLENAR. Email de la cuenta de correo. ej.info@midominio.com La cuenta de correo debe ser creada previamente.
        $mail->Password = "w3R0vApxWrH7QKEN"; // A RELLENAR. Aqui pondremos la contraseña de la cuenta de correo
        $mail->Port = 587; // Puerto de conexión al servidor de envio.
        $mail->From = "no-reply@pracodidacol.com.co"; // A RELLENARDesde donde enviamos (Para mostrar). Puede ser el mismo que el email creado previamente.
        $mail->FromName = "Mack Landing Anthem"; //A RELLENAR Nombre a mostrar del remitente.
        $mail->AddAddress("contacto@solucionsoft.com"); // Esta es la dirección a donde enviamos
        $mail->AddAddress("mack_contacto@didacol.com"); // Esta es la dirección a donde enviamos
        $mail->AddAddress("habeasdata@didacol.com"); // Esta es la dirección a donde enviamos
        $mail->IsHTML(true); // El correo se envía como HTML
        $mail->Subject = "Lead MACK ANTHEM 2020"; // Este es el titulo del email.
        $body = "";
        $body .= "Nombres: ".$name."<br/>";
        $body .= "Apellidos: ".$lastname."<br/>";
        $body .= "Email: ".$email."<br/>";
        $body .= "Celular: ".$phone."<br/>";
        $body .= "Cedula: ".$identification."<br/>";
        $body .= "Ciudad: ".$city."<br/>";

        $mail->Body = $body;

        $exito = $mail->Send(); // Envía el correo.
        if($exito){
            header('Location: gracias.php?Error=1');
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