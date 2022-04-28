<?php
$conn = NULL;
try {
    $con = new PDO("mysql:host=localhost; dbname=verduleria; charset=utf8", 'root', '');

    if (isset($_GET['idPoblacion']) && isset($_GET['idEstado']) ) {
        $idPoblacion = $_GET['idPoblacion'];
        $idEstado = $_GET['idEstado'];
        $sql = "SELECT * FROM vendedores WHERE G = '$idPoblacion' AND J = '$idEstado'";
        
    }else if(isset($_GET['idEstado']) ) {
            $idEstado = $_GET['idEstado'];
            $sql = "SELECT * FROM vendedores WHERE J = '$idEstado'";

    }else if(
        isset($_GET['idPoblacion'])  ) {
            $idPoblacion = $_GET['idPoblacion'];
            $sql = "SELECT * FROM vendedores WHERE G = '$idPoblacion'";
    
    }
    else{
        $sql ="SELECT * FROM vendedores ";
    }



    $stm = $con->prepare($sql);
    $stm->execute();
    $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultSet);
} catch (PDOException $e) {
    echo "Error " . $e->getMessage();
}
