const form = document.getElementById('form')
const listado = document.getElementById('listado')
const cuadroPrecio = document.getElementById('cuadroPrecio')
const cuadroNombre = document.getElementById('cuadroNombre')
form.addEventListener("submit",(e)=>{
    //Eliminamos la acción por defecto de los eventos
    e.preventDefault()
    //selectedIndex nos devuelve el índice que ocupa en la lista 
    //el elemento seleccionado, pero a nosotros nos interesa el value
    //console.log(listado.selectedIndex);
    //Para acceder al value haremos lo siguiente, acceder al
    //hijo que ocupa la posición seleccionada
   // console.log(listado.children[listado.selectedIndex]);
    // Y para acceder al value, lo añadimos
    console.log(listado.children[listado.selectedIndex].value);
    getData(listado.children[listado.selectedIndex].value);

})
//El id será el valor que usaremos para acceder cuando seleccionemos un valor
const getData = (id) => {
    //Creamos el objeto que nos va a servir para acceder a la base
    let xhr = new XMLHttpRequest()
        //Si no hemos pasado ningún identificador cargamos el contenido
        if (id == undefined) {
        //Accedemos a la base de datos mediante el archivo .php
        xhr.open('GET', 'acceso.php')
        //Especificamos lo que queremos que se haga cuando se cargue el contenido
        xhr.addEventListener('load', (data) => {
            //Creamos el vector con la información que pasa
            const dataJSON = JSON.parse(data.target.response)
            //Mostramos en consola esta información para comprobar si ha funcionado
           console.log(dataJSON)
        const fragment = document.createDocumentFragment()
        for (const vendedor of dataJSON) 
        {
            const option = document.createElement('option');
            option.setAttribute('value',vendedor.A)
            option.textContent = vendedor.B;
            fragment.append(option)
        }
            listado.appendChild(fragment)
        }) }else{
            xhr.open("GET", 'acceso.php?id='+id);
            xhr.addEventListener('load', (data) => {
                //Creamos el vector con la información que pasa
                const dataJSON = JSON.parse(data.target.response)
                //Mostramos en consola esta información para comprobar si ha funcionado
               console.log(dataJSON)
            const fragment = document.createDocumentFragment()
            for (const vendedor of dataJSON) 
            {
                cuadroNombre.value = vendedor.B;
                cuadroPrecio.value = vendedor.D;
            }
            })
        } 
        //Enviamos la solucitud al servidor
        xhr.send()
    };
    getData();