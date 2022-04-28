const cartas = new Array( 
    "homer.jpg", "bart20_400x400.jpg",  "margee_400x400.jpg", "lisa2.jpeg",
    "maggie.jpg", "abraham.png"
); 
//array donde guardo los nombres de las imagenes validas
//podría haber mas imagenes en la carpeta y asi coge solo esas
const puntuacion = document.getElementById("aciertos");
         
console.log(cartas);  
//let intentos = 0;

class Juego {
    constructor() {

        this.canPlay = false;
        this.card1 = null;
        this.card2 = null;

        this.availableImages = [...cartas];// con ... duplico  
        this.orderForThisRound = [];
        this.cards = Array.from( document.querySelectorAll(".board-game figure") );
    //en el <main> con class board-game recoge las etiquetas figure para guardar en array

        this.maxPairNumber = this.availableImages.length;
    //coge la totalidad de las imagenes. Tener máx núm de parejas
        this.startGame();
    //llamo a la funcion de empezar juego.
    }
    startGame() {
        this.foundPairs = 0;
    //inicializo el numero
        this.setNewOrder();
    //llamo a la funcion de sacar el orden aleatorio
        this.setImagesInCards();
        this.openCards();
    }
    setNewOrder() {
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort( () => Math.random() - 0.5 );
    }
    setImagesInCards() {
    // debugger;
    //fija las posiciones de las cartas
        for (const key in this.cards) {
    //recorro cada valor "key" guardado en el constructor  
            const card = this.cards[key];

            const image = this.orderForThisRound[key];
            const imgLabel = card.children[1].children[0];
    //busca los hijos de card y los guarda en imgLabel para más abajo asignarles el src

            card.dataset.image = image;
            imgLabel.src = `img/${image}`;
    //les da a cada src del index una localización quite .jpg para que cogiera en caso de, los jpeg.
    //mete en ${image} los valores del array donde figura cada nombre.
        }
    }
    openCards() {
        //this.cards.forEach(card => card.classList.add("opened"));
        //lineaAnterior si quiero que me las muestre previamente
        //El setTimeout()método llama a una función después de una cantidad de milisegundos
        //se ejecuta una sola vez.
        setTimeout(() => {
            this.closeCards();
        }, 1000);//10000
    }
    closeCards() {

        this.cards.forEach(card => card.classList.remove("opened"));
        //El método .forEach() ejecuta la función indicada una vez por cada elemento del array cards
        this.addClickEvents();
        this.canPlay = true;
    }
    addClickEvents() {
        this.cards.forEach(_this => _this.addEventListener("click", this.flipCard.bind(this)));
    }
    removeClickEvents() {
        this.cards.forEach(_this => _this.removeEventListener("click", this.flipCard));
    }

    flipCard(e) {
    //recibe la info de los ClickEvents y le asigna si se cumple la condición
        const clickedCard = e.target;
        if (this.canPlay && !clickedCard.classList.contains("opened")) {
            
            clickedCard.classList.add("opened");
            this.checkPair( clickedCard.dataset.image );
        }
    }
    checkPair(image) {
        //comprueba si son iguales 
        if (!this.card1) this.card1 = image;
        else this.card2 = image;
        if (this.card1 && this.card2) {
            if (this.card1 == this.card2) {
                this.canPlay = false;
                setTimeout(this.checkIfWon.bind(this), 300)
                //El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada. 
            }
            else {
                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this), 800)
            }
        }
    }
    resetOpenedCards() {    
        //identifica cada carta volteada y la devuelve a su estado original " no opened "
        const firstOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card1}']`);
        const secondOpened = document.querySelector(`.board-game figure.opened[data-image='${this.card2}']`);
        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");
        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;
    }
    checkIfWon() {
    //debugger;Lo he usado para comprobar cuanto acutalizaba o si lo hacia
    //Comprueba con maxPairNumber guardado en 
    //this.maxPairNumber = this.availableImages.length;
    //en el constructor si el numTotal guardado es equivalente a las parejas 
        this.foundPairs++;
        //contador de parejas validas
        this.actualizarPunt ();
        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;
        if (this.maxPairNumber == this.foundPairs) {

            alert("¡Ganaste!");
            puntuacion.value="0";
            this.setNewGame();  
        }
    }
    setNewGame() {
    //vuelve a iniciar el juego volviendo a poner las cartas
        this.removeClickEvents();
        this.cards.forEach(card => card.classList.remove("opened"));
    //recorre todas las cartas y deshace las volteadas
        setTimeout(this.startGame.bind(this), 1000);
    //temporizador 
    }
    actualizarPunt() {
        //controlo la info del value del input con la variable de arriba de "foundPairs" que controla cada vez que hay una pareja.
       // const puntuacion = document.getElementById("aciertos");
         
        puntuacion.value =this.foundPairs;
    }
}

//inicia y carga todo llamando a la clase al cargar documento    
document.addEventListener("DOMContentLoaded", () => {
    new Juego();
});