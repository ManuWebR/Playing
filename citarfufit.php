<?php
error_reporting(0);

$conexion = mysqli_connect("manurmhpastelwp.mysql.db", "manurmhpastelwp", "wellnessFitt1", "manurmhpastelwp");
if(!$conexion) {
    exit("Error al contectarse al servidor MySQL.");
}

$name = $_POST["name"];
$telf = $_POST["telf"];
$price = $_POST["price"];
/*
if(empty($nombre) && empty($email) && empty($password)) {
    exit("introduce tus datos");
}
*/
$consulta ="insert into fufit_reservas (nombre,email,precio) values ('$name','$telf','$price')";
$result = mysqli_query($conexion,$consulta);

$num = mysqli_affected_rows($conexion);

if($num>0){
    echo " Completado".$consulta;
}else{
    echo " Error, registro no completado";
}
mysqli_close($conexion);
?>