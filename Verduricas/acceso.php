<?php
$conn = NULL;
try {

    $con = new PDO("mysql:host=localhost; dbname=verduleria; charset=utf8", 'root', '');
   
   
    if (isset($_GET['infoProduc'])) {
        $infoProduc = $_GET['infoProduc'];

        $sql = "SELECT * FROM productos WHERE A=$infoProduc";
    } else if (isset($_GET['infoGrupo'])) {
        $infoGrupo = $_GET['infoGrupo'];
        $sql = "SELECT * FROM productos WHERE C=$infoGrupo";
    } else {

        $sql = "SELECT * FROM grupos";
    }

    $stm = $con->prepare($sql);
    $stm->execute();

    $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($resultSet);
} catch (PDOException $e) {
    echo "Error " . $e->getMessage();
}
