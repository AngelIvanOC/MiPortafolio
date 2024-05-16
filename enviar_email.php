<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "angelivanortegachavarria@gmail.com";
    
    $subject = "Nuevo mensaje de $name";

    $body = "Nombre: $name\nCorreo Electrónico: $email\nMensaje:\n$message";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "¡El mensaje se ha enviado correctamente!";
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    echo "Acceso denegado.";
}
?>
