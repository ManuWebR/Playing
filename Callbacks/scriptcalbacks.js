const users = [
  {
    id: 1,
    name: "manu"
  },
  {
    id: 2,
    name: "luis"
  },
  {
    id: 3,
    name: "maite"
  },
];
/*const getuser = (id) => {
  if (id >= 1 && id <= 3) {
    return users;
  } else return "error";
}
*/

const getuser=(id)=>{
const promesa = new Promise ( (resolve,reject)=>{
    //resolve es lo que ha ido bien
    //reject si no va bien
    if(id>=1 && id<=3) resolve (users)
    else reject ("error") 
})
return promesa;
//este return me devuelve demasiada info de los procesos
}

getuser(2)
.then(usuarios=>console.log(usuarios))
.catch(devuelto=>console.log(devuelto))

/*then me permite obtener el resolve del resultado de promesa
    catch de reject. 
*/