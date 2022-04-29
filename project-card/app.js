const cardWrapper = document.querySelector(".cardWrapper");
const card = document.getElementById("card");
const highlight = document.querySelector(".highlight");
const container = document.querySelector(".container")

const mostX = 10;
const mostY = 10;

cardWrapper.addEventListener("mousemove", (e) => {
    card.style.transition = "none";
    highlight.style.transition = "none";

    const x = e.offsetX;
    const y = e.offsetY;
    const {width, height} = cardWrapper.getBoundingClientRect();
    const halfWidth = width/2;
    const halfHeight = height/2;

    const rotationY = ((x - halfWidth) / halfWidth) * mostX;
    const rotationX = ((y - halfHeight) / halfHeight) * mostY;

    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`

    highlight.style.left = `${(rotationY / mostY * 100) * -1}%`
    highlight.style.top = `${(rotationX / mostX * 100) * -1}%`
})

// NUMBERS
var myCardNumber = document.getElementById("cardDigits")

const val = Math.floor(1000 + Math.random() * 9000);

function numGenerator() {
    setInterval(() => {
        setTimeout(() => {
            myCardNumber.style.fontSize = "3rem";
            myCardNumber.style.fontStyle = "italic";
            myCardNumber.style.marginBottom = "10px";
            myCardNumber.textContent = `${val}`
        }, 1000);
    });
}
numGenerator()



setTimeout(() => {
    console.log(`Card Number Shown = ${val}, A Real Shame You Can't See The Numbers Under The Stars...`); 
}, 2500);

setTimeout(() => {
    console.log(`BooHoo, Cry About It... All You Know Is ${val} Are The Last Numbers`); 
}, 5000);


const colorPallete = [
    "#006E7F",
    "#F8CB2E",
    "#EE5007",
    "#B22727",
    "#D82148",
    "#6EBF8B",
    "#ED5EDD",
    "#548CFF",
]

const random = Math.floor(Math.random() * colorPallete.length);

cardWrapper.addEventListener("click", () => {
    console.log(`TEST`);
})


cardWrapper.addEventListener("click", () => {
    console.log(`Waaaay, You Tried..... Just Know, ${val} Are The Last Numbers, On This Card, Bozo`); 
    cardWrapper.style.color = "red";
})


