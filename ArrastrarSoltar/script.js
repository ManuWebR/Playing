const cerilla = document.getElementById("cerilla")
const papelera = document.getElementById("cubo")
const cuerpo=document.getElementById("body")
//Cuando pulsamos la cerilla se enciende, cambiamos la imagen
 cerilla.addEventListener("mousedown",(e)=>{
     cerilla.src="cerillaEncendida.jpg"
 })
//Aunque en principio no hacemos nada, es obligatorio añadir
//este evento para que luego funcione drop, la imagen se mueve
papelera.addEventListener("dragover",(e)=>{
  e.preventDefault();
})
//Cuando soltamos la imagen en la papelera aparece la 
//papelera quemada
papelera.addEventListener("drop",(e)=>{
    papelera.src="papeleraEncendida.jpg"
    cerilla.src=""
})
//Controlamos lo que pasa si la cerilla se suelta en el cuerpo
cuerpo.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
cuerpo.addEventListener("drop",(e)=>{
    e.preventDefault()
    cerilla.src="cerilla.jpg"
})


