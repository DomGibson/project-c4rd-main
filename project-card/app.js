const cardWrapper = document.querySelector(".cardWrapper");
const card = document.getElementById("card");
const highlight = document.querySelector(".highlight");
const container = document.querySelector(".container");

const inputName = document.getElementById("input-box-text");
const cardHolderName = document.getElementById("cardholder-name-text");
const inputNameSubmit = document.getElementById("input-box-submit");

const mostX = 10;
const mostY = 10;

// MOUSE MOVE ANIMATION

cardWrapper.addEventListener("mousemove", (e) => {
    card.style.transition = "all .25s linear";
    highlight.style.transition = "none";

    const x = e.offsetX;
    const y = e.offsetY;
    const {width, height} = cardWrapper.getBoundingClientRect();
    const halfWidth = width/2;
    const halfHeight = height/2;

    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY;

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;

    highlight.style.left = `${(rotationY / mostY * 100) * -1}%`;
    highlight.style.top = `${(rotationX / mostX * 100) * -1}%`;
})

// NUMBERS
var myCardNumber = document.getElementById("cardDigits");

const val = Math.floor(1000 + Math.random() * 9000);

function numGenerator() {
    setInterval(() => {
        setTimeout(() => {
            myCardNumber.style.fontSize = "3rem";
            myCardNumber.style.fontStyle = "italic";
            myCardNumber.style.marginBottom = "10px";
            myCardNumber.textContent = `${val}`;
            myCardNumber.style.transition = "all .05s ease-in";

        }, 1000);
    });
}
numGenerator()



// COLOURS FROM PALLETE

const colorPallete = [
    "006E7F",
    "F8CB2E",
    "EE5007",
    "B22727",
    "D82148",
    "6EBF8B",
    "ED5EDD",
    "548CFF",
];

function randomColorsOne() {
    return '#' + colorPallete[Math.floor(Math.random() * colorPallete.length)];
}

cardWrapper.addEventListener("click", () => {
    card.style.backgroundColor = `${randomColorsOne()}`;
    card.style.transition = "all 1s ease-in";

})

function randomColorsTwo() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

cardWrapper.addEventListener("click", () => {
    cardWrapper.style.color = `${randomColorsTwo()}`;
    cardWrapper.style.transition = "all 1s ease-in";

})

// NAME INPUT

inputNameSubmit.addEventListener("click", () => {
    cardHolderName.textContent = `${inputName.value.toUpperCase()}`;
})




