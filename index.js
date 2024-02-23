// empty array for the cart
// fleshing out display function
// assigning URL to API to fetch
const apiURL = `https://fakestoreapi.com/`;
let cart = [];

const Display = document.querySelectorAll(`display`)
const Electronics = document.getElementById(`electronics`);
const Jewelery = document.getElementById(`jewelery`);
const MensClothing = document.getElementById(`mensClothing`);
const WomensClothing = document.getElementById(`womensClothing`)

const removeElements = (element) =>{
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};



// building the function to pull the card together
const displayCards = function(data){
    data.forEach( product => {
        let card = document.createElement(`div`);
        let img = document.createElement(`img`)
        let title = document.createElement(`h3`)
        let accordion = document.createElement(`div`);
        let accordionItem = document.createElement(`div`);
        let accordionHeader = document.createElement(`h2`);
        let accordionButton = document.createElement(`button`);
        let accordionCollapse = document.createElement(`div`);
        let accordionBody = document.createElement(`div`);
        let description = document.createElement(`p`)
        let price = document.createElement(`p`)
        let addToCartButton = document.createElement(`button`);

        //* Set attributes
        cardContainer.className=`col`;
        cardContainer.style.row= "rows-cols-1 rows-col-md-1 g-4";
        card.className = 'card';
        card.style.width = '18rem';
        img.src = product.image;
        img.className = 'card-img-top';
        body.className = 'card-body'; 
        title.className = 'card-title';
        title.textContent = product.title;
        accordion.classList.add(`accordion`)
        accordionItem.classList.add(`accordion`);
        accordionHeader.classList.add(`accordion-header`)
        accordionButton.classList.add(`accordion-button`)
        accordionButton.type=`button`;
        accordionButton.textContent=`Description`;
        accordionCollapse
        accordionBody
        description.textContent=product.description;
        description.className=`card-text`;
        price.textContent
        price.className=`card-text`;

        addToCartButton.onclick=()=>{
            accordionButton.addEventListener(`click`, ()=>{
                accordionContent.classList.toggle(`show`);
            });
        }
        const newItem = {
            id:product.id,
            title:product.title,
            cost:product.price.toFixed(2),
            quantity: 1,
        };
        submitToCart(newItem);
    })
};    

Electronics.addEventListener("click", () => {
    e.preventDefault();
    fakeStore(`category/Electronics`)
});
Jewelery.addEventListener("click", () => {
    e.preventDefault()
    fakeStore(`category/Jewelery`)
});
MensClothing.addEventListener("click", () => {
    e.preventDefault()
    fakeStore(`category/MensClothing`)
});
WomensClothing.addEventListener("click", () => {
    e.preventDefault()
    fakeStore(`category/WomensClothing`)
});

const fakeStore = async(endpoint) => {
    try {
        let response = await fetch(apiURL + endpoint);
        let data = await response.json();
    
    displayCards(data);}
    catch (error){
        console.error(err)
    }
};
onload = () => {
    fakeStore("");
}