<?php
error_reporting(0);

$conexion = mysqli_connect("manurmhpastelwp.mysql.db", "manurmhpastelwp", "wellnessFitt1", "manurmhpastelwp");
if(!$conexion) {
    exit("Error al contectarse al servidor MySQL.");
}

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$password = $_POST["password"];

if(empty($nombre) && empty($email) && empty($password)) {
    exit("introduce tus datos");
}

$consulta ="insert into fufit_users (nombre,email,password) values ('$nombre','$email','$password')";
$result = mysqli_query($conexion,$consulta);

$num = mysqli_affected_rows($conexion);

if($num>0){
    echo " Completado";
}else{
    echo " Error, registro no completado";
}
mysqli_close($conexion);
?>