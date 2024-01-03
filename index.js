// empty array for the cart
// fleshing out display function
// assigning URL to API to fetch
let apiURL = `https://fakestoreapi.com/`;
let cart = [];
let display = document.getElementById(`display`)

const category = document.querySelectorAll(`display`)

const electronics = document.getElementById(`electronics`);
const jewelery = document.getElementById(`jewelery`);
const mensClothing = document.getElementById(`mensClothing`);
const womensClothing = document.getElementById(`womensClothing`)

// building the function to pull the card together
const createCards = function (item) {
    item.forEach((item) => {
        const col = document.createElement(`div`);
        const card = document.createElement(`div`);
        const img = document.createElement(`img`)
        const title = document.createElement(`h3`)
        const description = document.createElement(`p`)
        const price = document.createElement(`p`)

        col.classList.add(`col`);
        card.classList.add(`card`)
        img.classList.add(`card-img-top`);
        title.classList.add(`card-title`);
        description.classList.add(`card-text`);
        price.classList.add(`price`);
    })};

    const fakeStore = async(endpoint) => {
        const response = await fetch(apiURL + endpoint);
        const data = await response.json();
    }

// Working on the event listeners.
    electronics.addEventListener("click", () => {
    })
    jewelery.addEventListener("click", () => {
    })
    mensClothing.addEventListener("click", () => {
    })
    womensClothing.addEventListener("click", () => {
    })