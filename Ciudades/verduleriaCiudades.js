const selectCiudad = document.getElementById("selectCiudad");
const selectEstado = document.getElementById("selectEstado");
const formulario = document.getElementById("formulario");
let ciudadSeleccionada;
let estadoSeleccionado;
const obtenerDatos = (idPoblacion) => {
  if (idPoblacion) {
  
    axios({
      method: "GET",
      url: "acceso.php?idPoblacion=" + idPoblacion
    })
      .then(res => addOpciones(selectCiudad, res.data))
      .catch(err => console.log(err));
  } else {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "acceso.php");
    xhr.addEventListener("load", (data) => {
      const dataJSON = JSON.parse(data.target.response);
      addOpciones(dataJSON);
    });
    xhr.send();
  }
};
const addOpciones = (dataJSON) => {
  const setCiudad= new Set();
  const setEstado= new Set();
  const fragmento = document.createDocumentFragment();
  const fragmento2 = document.createDocumentFragment();
  for (let elemento of dataJSON) {
    setCiudad.add(elemento.G);
  }
  for (let elemento of dataJSON) {
    setEstado.add(elemento.J);
  }

  for (let elemento of setCiudad) {
    const opcionSelect = document.createElement("option");
    opcionSelect.value = elemento;
    opcionSelect.textContent = elemento;
    fragmento.appendChild(opcionSelect);
  }

  for (let elemento of setEstado) {
    const opcionSelect2 = document.createElement("option");
    opcionSelect2.value = elemento;
    opcionSelect2.textContent = elemento;
    fragmento2.appendChild(opcionSelect2);
  }
  selectCiudad.appendChild(fragmento);
  selectEstado.appendChild(fragmento2);
  
};
obtenerDatos();
formulario.addEventListener("change", (e) => {
  const tipo = e.target.name;
  const valor = e.target.value;
  if(tipo=="ciudad"){
   
    if(valor=="Poblacion")ciudadSeleccionada =null;
    else ciudadSeleccionada= valor;
  }else{ if(valor=="EstalCivil")estadoSeleccionado =null;
    else estadoSeleccionado=valor;
  }
  console.log(" soy el addEventListener");

  getDatosFinal(ciudadSeleccionada,estadoSeleccionado);
});
//////////////////////
const getDatosFinal = (ciudad, estado) => {
  console.log(ciudad+" , "+estado)
  let entradaPhp;
    if(ciudad && estado) entradaPhp = "acceso.php?idPoblacion=" + ciudad+"&idEstado="+estado;
    else if (ciudad) entradaPhp = "acceso.php?idPoblacion=" + ciudad;
    else if (estado) entradaPhp = "acceso.php?idEstado="+estado;
    else {
      listado.textContent="MEJOR SELECCIONE UNA OPCIÓN";
    }
    fetch(entradaPhp) 
    .then((res) => res.ok == true ? Promise.resolve(res) : Promise.reject("error") )
    .then((res) => res.json())
    .then((res) => {
      const fragment = document.createDocumentFragment();console.log(res);
      for (const objetoPersona of res) {
        
        const row = document.createElement("ul");
        const dataNombre = document.createElement("li");
        const dataCiudad = document.createElement("li");
        const dataEstado = document.createElement("li");
        dataNombre.textContent = objetoPersona.B;
        dataCiudad.textContent = objetoPersona.G;
        dataEstado.textContent = objetoPersona.J;
        row.append(dataNombre);
        row.append(dataCiudad);
        row.append(dataEstado);
        fragment.append(row);
      }
      listado.textContent="";
      listado.appendChild(fragment);
    });
 
};
