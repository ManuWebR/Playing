const boton=document.getElementById("boton");

boton.addEventListener("click", ()=>{
    //La siguiente orden nos conectaría con la base, no
    //hace falta especificar GET ya que se accede por defecto.
    fetch("https://jsonplaceholder.typicode.com/users")
    //La siguiente instrucción comprueba que la conexión se ha producido correctamente
        .then(res=>(res.ok==true)?Promise.resolve(res):Promise.reject(res))
        .then(res => res.json())//Convertimos en un objeto javascript
        //lo que nos ha devuelto la API, ahora ya podemos leer
        .then(res=> {
        const lista=document.getElementById("lista");
        const fragmento = document.createDocumentFragment();
        for(const valor of res)
        {
            const elementoLista=document.createElement("li");
            elementoLista.textContent=`El identificador es ${valor.id} y el nombre ${valor.name}`;
            fragmento.appendChild(elementoLista);
         } lista.appendChild(fragmento);
        });
})

