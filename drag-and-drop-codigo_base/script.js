//Construimos un array con las imagenes en el orden que
//deben estar en el puzle
const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
    'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7', 'imagen-8'
];

const puzzle = document.getElementById('puzzle');
const piezas = document.getElementById('piezas');
const mensaje = document.getElementById('mensaje');

//Número de imágenes que hay que enseñar
let terminado = imagenes.length;

while (imagenes.length) {
    //seleccionamos un indice de forma aleatoria
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement('div');
    //le ponemos ese nombre para aplicar formato del css
    div.className = 'pieza';
    div.id = imagenes[index];
    //Permitimos que el elemento sea movible
    div.draggable = true;
    //Añadimos al div creado la imagen seleccionada
    div.style.backgroundImage = `url("${imagenes[index]}.jpg")`;
    //Añadimos el div a piezas
    piezas.appendChild(div);
    //Eliminamos la imagen del array
    imagenes.splice(index, 1);
}

for (let i = 0; i < terminado; i++) {
    const div = document.createElement('div');
    //Para definir el formato a cada elemento del puzle
    div.className = 'placeholder';
    div.dataset.id = i;
    //Añadimos cada elemento al div puzzle
    puzzle.appendChild(div);
}


piezas.addEventListener('dragstart', (e) => {
    //Cuando empezamos a mover un elemento asignamos
    //al atributo id, el nombre de la pieza seleccionada
    console.log(e.target.id);
    e.dataTransfer.setData('id', e.target.id);
});

puzzle.addEventListener('dragover', (e) => {
    e.preventDefault();
    //Cuando el elemento este pasando queremos que se note
    //con lo que aplicamos a puzle un formato determinado
    e.target.classList.add('hover');
});

puzzle.addEventListener('dragleave', (e) => {
    //Cuando salga el arrastre de un div de puzzle quitamos ese formato
    e.target.classList.remove('hover');
});

puzzle.addEventListener('drop', (e) => {
    //Cuando soltamos eliminamos primero el formato
    e.target.classList.remove('hover');
      //Ahora comprobamos si la pieza es la correcta
    const id = e.dataTransfer.getData('id');
    //Como quiero solo el número de la imagen, separo el nombre
    //en dos desde el guión, y me quedo con la segunda parte
    //el número que es el que me interesa
    const numero = id.split('-')[1];

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));

        terminado--;

        if (terminado === 0) {
            document.body.classList.add('ganaste');
        }
    }
});