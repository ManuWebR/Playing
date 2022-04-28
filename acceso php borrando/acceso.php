<?php
    $conn = NULL;
        try{
            //Hacemos la conexión con la base de datos marvel que ya tenemos creada y lanzada
            //en nuestro servidor, por eso el localhost
            $con = new PDO("mysql:host=localhost; dbname=verduleria; charset=utf8", 'root', '');
          
           if(isset($_GET['id'])){
                $id = $_GET['id'];
            //Si seleccionamos un elemento del cuadro de lista, lo que haremos será seleccionar
            // solo el elemento que coincide con el elemento que hemos pasado
                $sql = "SELECT * FROM vendedores WHERE A=$id";
            }else{
             //La primera vez que entramos queremos seleccionar todos los vendedores para añadirlos
            //al cuadro de lista, ya que acabamos de acceder
                $sql = "SELECT * FROM vendedores";
            }
            //Le decimos que sobre la base de datos queremos ejecutar la instrucción sql
            //sobre la que estamos trabajando
            $stm=$con->prepare($sql);
            //La ejecutamos
            $stm->execute();
            //Guardamos la información resultante en un variable, fijaros que estamos en
            //php por lo que las variables deben empezar por el símbolo $
            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
              //Convertimos a formato JSON lo obtenido en la ejecución
            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }
?>