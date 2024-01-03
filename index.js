// First attempts at adding all the products.
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

let electronics = [];
let jewelery = [];
let mensClothing = [];
let womensClothing = [];

// console.log(fetch);
// Testing if this pulls up an array