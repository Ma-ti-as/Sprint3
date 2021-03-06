// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;
var preuTotal=0;
var tipus;
var subtotalGrocery=0;
var subtotalClothes=0;
var subtotalBeauty=0;

// Exercise 1
    // 1. Loop for to the array products to get the item to add to cart

function mostraProductes(products){
    for(let i=0; i<products.length; i++) {
        products[i].id=1+i;
        console.log('Producte número '+(i+1));
        console.log(products[i]);
    }
}
mostraProductes(products);
    // 2. Add found product to the cartList array

function addToCartList(id) {
    cartList.push(products[id-1]);
}
addToCartList(1);
addToCartList(1);
addToCartList(1);
addToCartList(1);
addToCartList(2);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);
addToCartList(3);

addToCartList(4);
addToCartList(5);
console.log(cartList)


// Exercise 2
function cleanCart() {
    cartList=[];
}


// Exercise 3
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

function calculateSubtotals() {
    for (i=0; i<cartList.length; i++) {
        tipus=cartList[i].type;
        cartList.map(v => Object.assign(v, {quantity: 1}));//afegim atribut quantity a tots els objectes de cartList amb valor 1
        if (tipus=='grocery'){
            subtotal.grocery.value+=cartList[i].price;
        
        }else if(tipus=='beauty'){
            subtotal.beauty.value+=cartList[i].price;
        }else{
            subtotal.clothes.value+=cartList[i].price;
        }
    }
    console.log('Subtotals:')
    console.log('  Grocery: '+subtotal.grocery.value);
    console.log('  Beauty: '+subtotal.beauty.value);
    console.log('  Clothes: '+subtotal.clothes.value);
    
};

// Exercise 4
    // Calculate total price of the cart either using the "cartList" array

function calculateTotal() {
    calculateSubtotals();
    for (var x in subtotal) {
        preuTotal+=subtotal[x].value;
    }
    console.log('Total: '+preuTotal);
}calculateTotal()

// Exercise 5
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

function generateCart(){//afegit el paràmetre cartlist a la funció per poder probar-la amb un altre array sense modificar el codi
    let set= new Set(cartList.map( JSON.stringify ))//convertits els objectes a cadena de text per comprobar repetits
    cart = Array.from( set ).map( JSON.parse );//afegim a cart els resultats únics i convertim els strings d'abans a objectes
    
    for( let i=0; i<cart.length;i++){
        cart[i].quantity=0;// reset del camp a 0 per anar sumant els que venen de cartList
        for( let j=0; j<cartList.length; j++ ){
            
            if(cart[i].name==cartList[j].name){
                cart[i].quantity++;
                cart[i].subtotal=(cart[i].quantity*cart[i].price);
            }
        }
    }console.log(cart);
}generateCart()

// Exercise 6
    // Apply promotions to each item in the array "cart"

function applyPromotionsCart() {
    for( let i=0; i<cart.length;i++){
        if(cart[i].name=='cooking oil'&cart[i].quantity>=3){
            cart[i].subtotalWithDiscount=cart[i].quantity*10; //afegim l'atribut subtotalWithDiscount per l'oferta a l'oli
        }else if(cart[i].name=='Instant cupcake mixture'&cart[i].quantity>=10){
            cart[i].subtotalWithDiscount=(cart[i].subtotal*2)/3; //afegim l'atribut subtotalWithDiscount per l'oferta a la mescla per pastís
        }else{cart[i].subtotalWithDiscount='No discount'} //afegim l'atribut subtotalWithDiscount sense discount per a la resta de productes 
    }
    console.log(cart);
    
}applyPromotionsCart()

// Exercise 7
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

function addToCart(id) {
    var troba=false;
    if(cart.length==0){
        cart.push(products[id-1]);
        cart[0].quantity=1;
    }
    else if(cart.length>0){
        for(var i=0; i<cart.length; i++){
            if(products[id-1].name==cart[i].name){
                troba=true;}
                if(troba){
                    cart[i].quantity++;}
        }
        if(troba==false){
            cart.push(products[id-1]);
            cart[cart.length-1].quantity=1;
        }
    }
    for( let i=0; i<cart.length; i++){
        cart[i].subtotal=cart[i].quantity*cart[i].price;
    }applyPromotionsCart();
    
}

// Exercise 8
    // 1. Loop for to the array products to get the item to add to cart
    mostraProductes(cart);
    // 2. Remove found product to the cartList array

function removeFromCart(id) {
    cart.splice(id-1,1);
    console.log(cart);
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}