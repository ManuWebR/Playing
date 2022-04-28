
const formulario = document.getElementById("formulario");
const grupos = document.getElementById("grupos");
const info = document.getElementById("info");

const getGrupo = () => {
  fetch("acceso.php")
    .then((res) =>
      res.ok == true ? Promise.resolve(res) : Promise.reject(res))
    .then((res) => res.json())
    .then((res) => {
      const fragmentoGrupo = document.createDocumentFragment();
      for (const grupo of res) {
        const option = document.createElement("option");
        option.setAttribute("value", grupo.A);
        option.textContent = grupo.B;
        fragmentoGrupo.append(option);
      }        
      grupos.appendChild(fragmentoGrupo);
    });
};
getGrupo();
grupos.addEventListener("change", (e) => {
  getProducto(e.target.value);
});

const getProducto = (id) => {
  let select2 = document.getElementById("select2");
  if(select2!= undefined){ 
    select2.innerHTML= "";
  } else{
    select2=document.createElement("select");
    select2.setAttribute("id", "select2");
    formulario.appendChild(select2);
    }
  fetch("acceso.php?infoGrupo=" + id)
    .then((res) =>
      res.ok == true ? Promise.resolve(res) : Promise.reject(res)
    )
    .then((res) => res.json())
    .then((res) => {
      const fragment = document.createDocumentFragment();
 
      for (const producto of res) {
        const opcion = document.createElement("option");
        opcion.setAttribute("value", producto.A);
        opcion.textContent = producto.B;
        fragment.append(opcion);
      }
      select2.append(fragment);
    });
    select2.addEventListener("change", (e) => {
      outProducto(e.target.value);
    });
};

const outProducto = (id) => {
  info.innerHTML="";
  fetch("acceso.php?infoProduc=" + id)
    .then((res) =>
      res.ok == true ? Promise.resolve(res) : Promise.reject(res))
    .then((res) => res.json())
    .then((res) => {
      const fragment = document.createDocumentFragment();
      for (const verdurica of res) {
       
        const row = document.createElement("tr");
        const dataverdurica = document.createElement("td");
        const dataId = document.createElement("td");
        const price = document.createElement("td");
        dataverdurica.textContent = verdurica.B;
        dataId.textContent = verdurica.C;
        price.textContent = verdurica.D;
        row.append(dataverdurica);
        row.append(dataId);
        row.append(price);
        fragment.append(row);

       
      } 
      info.append(fragment);
    });
};
