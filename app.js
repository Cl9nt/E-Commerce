const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

/// Product Array 

const products = [
    {
        id: 1,
        title: "Tumeric",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./img/turmeric.png",
            },
            {
                code: "blue",
                img: "./img/Tumeric1.png"
            },
        ],
    },
    {
        id: 2,
        title: "Ginger",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./img/ginger.png",
            },
            {
                code: "blue",
                img: "./img/ginger1.png"
            },
        ],
    },
    {
        id: 3,
        title: "Rosemary",
        price: 150,
        colors: [
            {
                code: "black",
                img: "./img/rosemary.png",
            },
            {
                code: "blue",
                img: "./img/rosemary1.png"
            },
        ],
    },
    {
        id: 4,
        title: "Cinnamon",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./img/cinnamon.png",
            },
            {
                code: "blue",
                img: "./img/rosemary1.png"
            },
        ],
    },
    {
        id: 5,
        title: "Garlic",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./img/garlic.png",
            },
            {
                code: "blue",
                img: "./img/clove-garlic1.png"
            },
        ],
    },
    
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

/// Slider Transform

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=> {
        
        /// Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        /// Change the choosing product 
        choosenProduct = products[index];

        /// Change the text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img ;

        /// Assining new colors
        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
}); 


currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
           size.style.backgroundColor = "white";
           size.style.color = "black" ;
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});