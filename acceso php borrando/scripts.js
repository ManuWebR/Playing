const form = document.getElementById('form')
const listado = document.getElementById('listado')
const table = document.getElementById('table')
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
                //creamos un elemento tr asociado a la fila que queremos añadir
                const row = document.createElement('tr');
                const dataName = document.createElement('td');
                const dataFecha = document.createElement('td');
                const dataNif = document.createElement('td');
                dataName.textContent = vendedor.B;
                dataFecha.textContent = vendedor.C;
                dataNif.textContent = vendedor.D;
                row.append(dataName);
                row.append(dataFecha);
                row.append(dataNif);
                fragment.append(row);
            }
                
                if(table.children[1])
                table.removeChild(table.children[1]);// Eliminamos el dato
                //Seleccionamos el 1 porque el 0 correponde con la cabecera
                table.append(fragment)
            })
        } 
        //Enviamos la solucitud al servidor
        xhr.send()
    };
    getData();



      /*  
        })
    } else {
        xhr.open('GET', `marvel.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroe of dataJSON) {
                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment = document.createElement('TD')
                const dataHometown = document.createElement('TD')
                const dataGender = document.createElement('TD')
                const dataFighting = document.createElement('TD')
                dataName.textContent = heroe.Name
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                row.append(dataName)
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)

                fragment.append(row)
            }

            if (table.children[1]) {
                table.removeChild(table.children[1])
            }
            table.append(fragment)
        })
    }

    xhr.send()
}

getData()*/