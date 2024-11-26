// Constructorul pentru masină
class Car {
    constructor(x, y, imagePath) {
        this.x = x;
        this.y = y;
        this.speed = Math.floor(Math.random() * 10) + 5; // Viteza între 5 și 15
        this.imagePath = imagePath;
        this.init();
    }

    init() {
        const carElement = document.createElement("img");
        carElement.src = this.imagePath;
        carElement.style.width = "150px";
        carElement.style.position = "absolute";
        carElement.style.left = `${this.x}px`;
        carElement.style.top = `${this.y}px`;

        document.body.appendChild(carElement);
        this.element = carElement;
    }

    moveRight(distance) {
        this.x += distance;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
    }
}

// Inițializare mașini cu imagini locale
const mclaren = new Car(20, 70, "mclaren.png");
const ferrari = new Car(20, 270, "ferrari.png");

let animationInterval;

// Generarea unei distanțe aleatoare între 0 și 5
function getRandomDistance() {
    return Math.floor(Math.random() * 6);
}

// Pornirea cursei
document.getElementById("start-race").addEventListener("click", () => {
    clearInterval(animationInterval); // Oprirea oricărei curse anterioare

    animationInterval = setInterval(() => {
        mclaren.moveRight(getRandomDistance());
        ferrari.moveRight(getRandomDistance());

        // Actualizare statistici
        document.getElementById("stats").innerText =
            `Distanță McLaren: ${mclaren.x}px | Distanță Ferrari: ${ferrari.x}px`;

        // Verificare câștigător
        if (mclaren.x >= 800) {
            alert("McLaren a câștigat!");
            clearInterval(animationInterval);
        }
        if (ferrari.x >= 800) {
            alert("Ferrari a câștigat!");
            clearInterval(animationInterval);
        }
    }, 30);
});
