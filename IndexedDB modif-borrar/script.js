const indexedDB = window.indexedDB
const formu = document.getElementById("formulario")

if(indexedDB){ 
    let db
    const request = indexedDB.open('listaTareas',1)
    request.onsuccess=()=>{
        db = request.result
        console.log("OPEN",db)
      
        leerDatos()
    }
    request.onupgradeneeded=()=>{
        db = request.result
        console.log("Create",db)

        let objetoAlmacen = db.createObjectStore("Lista",{keyPath:"tareaNombre"})
       
    }
    request.onerror=(error)=>{
        console.log("Error",error)
    }
   
    const caja=document.getElementById("tasks");
    
    const leerDatos =()=>{
        const fragment = document.createDocumentFragment();
        const transaccion = db.transaction(["Lista"], "readonly")
        
        const objeto = transaccion.objectStore("Lista")
        const request = objeto.openCursor()
        request.onsuccess =(e)=>{
    
            const cursor = e.target.result
            if(cursor){
               const parrafoTarea=document.createElement('p');
               parrafoTarea.textContent=cursor.value.tareaNombre;
               fragment.appendChild(parrafoTarea);
               const parrafoValor=document.createElement('p');
               parrafoValor.textContent=cursor.value.prisa;
               fragment.appendChild(parrafoValor);
    
               botonModificar=document.createElement("button");
               botonModificar.textContent="Modificar"
               botonModificar.value=cursor.value.tareaNombre

               botonBorrar=document.createElement("button");
               botonBorrar.textContent="Borrar"
               botonBorrar.value=cursor.value.tareaNombre
            
               fragment.appendChild(botonModificar)
               fragment.appendChild(botonBorrar)
               cursor.continue()
            }
            else{
                console.log("Hemos terminado de leer")
                caja.textContent=""
                caja.appendChild(fragment)
            }
        }

    }
    const addDatos =(data)=>{
        const transaccion = db.transaction(["Lista"], "readwrite")
      
       const objeto = transaccion.objectStore("Lista")
     
       const request = objeto.add(data)
       leerDatos()
    }
    const updateData =(data) => { 
        const transaction = db.transaction(['Lista'], 'readwrite')
        const objectStore = transaction.objectStore('Lista')
        const request = objectStore.put(data)
        request.onsuccess = () => {
                formu.tarea.value=""
                formu.submit.value = 'Añadir tarea'
        }
        leerDatos()
    }
    const deleteDATA =(data) => {
        console.log(data)
        const transaction = db.transaction(['Lista'], 'readwrite')
        const objectStore = transaction.objectStore('Lista')
        const request = objectStore.delete(data)
        
        leerDatos()
    }

    formu.addEventListener("submit",(e)=>{
        e.preventDefault()
        const data={
            tareaNombre:e.target.tarea.value,
            prisa:e.target.prioridad.value
        }
        if(formu.submit.value=="Añadir tarea")
            addDatos(data)
        else
            updateData(data)
        
    })

    formu.addEventListener("submit",(e)=>{
        e.preventDefault()
        const data={
            tareaNombre:e.target.tarea.value,
            prisa:e.target.prioridad.value
        }
        if(formu.submit.value=="Añadir tarea")
            addDatos(data)
        else
            deleteDATA(data)
        
    })

    const obtenerDatos =(data) => {
   
        const transaction = db.transaction(['Lista'], 'readonly')
        const objectStore = transaction.objectStore('Lista')
        const request = objectStore.get(data)
        request.onsuccess = () => {
            formu.tarea.value= request.result.tareaNombre
            formu.prioridad.value=request.result.prisa
            formu.submit.value = 'Actualizar tarea'
        
        }
    }

    tasks.addEventListener('click', (e) => {

        console.log(e.target.textContent)
        console.log(e.target.value)
        if (e.target.textContent == 'Modificar') {
            obtenerDatos(e.target.value)
        }
        if (e.target.textContent == 'Borrar') {
            deleteDATA(e.target.value)
        }
    })

    leerDatos()
}    




