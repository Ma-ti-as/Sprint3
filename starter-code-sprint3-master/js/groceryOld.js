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
 // 2. Add found product to the cartList array

function addToCartList(id) {
    cartList.push(products[id-1]);
}

// Exercise 2  Segons enunciat s'ha de buidar cartList.
function cleanCart1() {
    cartList=[];
}

addToCartList(1);
addToCartList(2);
addToCartList(3);
console.log(cartList.length);
console.log(cartList);
cleanCart1();
console.log(cartList.length);
console.log(cartList);


//Però si es vol buidar qualsevol array es passa per paràmetre l'array a buidar
function cleanCart2(cartList){
    cartList=[];
}

// Exercise 3
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

function calculateSubtotals(cartList) {
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
}


// Exercise 4
    // Calculate total price of the cart either using the "cartList" array
//versió 1 comptant directe a l'array amb un for
function calculateTotal(cartList) {
    for (i=0; i<cartList.length; i++) {
        preuTotal+=cartList[i].price;
    }
    console.log('Total: '+preuTotal);
}

//versió 2  comptant subtotals amb un for...in
function calculateTotal2(cartList) {
    calculateSubtotals(cartList);
    var preuTotal2=0;
    for (var x in subtotal) {
        preuTotal2+=subtotal[x].value;
    }
    console.log('Total: '+preuTotal2);
}


// Exercise 5
// versió 1 descompte per tipus de producte en general(grocery, beauty o clothes)
function applyPromotionsSubtotals(array,kind,discount) {//(array on treballar, tipus de producte, descompte)
    var promoSubTotal=0;
    for (let i=0; i<array.length; i++) {
        var indice= array[i];
        tipus=indice.type;
        if (tipus==kind){
        promoSubTotal+= indice.price;
        }
    }console.log(promoSubTotal-(promoSubTotal*discount)/100);
} 

// Exercise 6
/*function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}*/
function generateCart(cartList){//afegit el paràmetre cartlist a la funció per poder probar-la amb un altre array sense modificar el codi
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
    }
    for( let i=0; i<cart.length;i++){
        if(cart[i].name=='cooking oil'&cart[i].quantity>=3){
            cart[i].subtotalWithDiscount=cart[i].quantity*10; //afegim l'atribut subtotalWithDiscount per l'oferta a l'oli
        }else if(cart[i].name=='Instant cupcake mixture'&cart[i].quantity>=10){
            cart[i].subtotalWithDiscount=(cart[i].subtotal*2)/3; //afegim l'atribut subtotalWithDiscount per l'oferta a la mescla per pastís
        }else{cart[i].subtotalWithDiscount='No discount'} //afegim l'atribut subtotalWithDiscount sense discount per a la resta de productes 
    }
    console.log(cart);
}

//Funció per aplicar les promos que diu l'exercici en comptes d'afegir el codi dins la propia funció de generateCart
function promoOilAndCake(cart){
    for( let i=0; i<cart.length;i++){
        if(cart[i].name=='cooking oil'&cart[i].quantity>=3){
            cart[i].subtotalWithDiscount=cart[i].quantity*10;
        }else if(cart[i].name=='Instant cupcake mixture'&cart[i].quantity>=10){
            cart[i].subtotalWithDiscount=(cart[i].subtotal*2)/3;
        }else{cart[i].subtotalWithDiscount='No discount'}
    }
}





// Exercise 7

//Segons  l'exercici del moddle s'aplicaven despcomptes per categoria però l'única promo que s'ha demanat era sobre producte...

//funció per aplicar descomptes al total de la compra
function fullDiscount(discount, array){
    calculateTotal(array);
    console.log(preuTotal-(preuTotal*discount)/100);
}

// Apply promotions to each item in the array "cart"

function applyPromotionsCart(productName, discount, num,){
    for( let i=0; i<cart.length;i++){
        if(cart[i].name==productName&cart[i].quantity>=num){
            cart[i].subtotalWithDiscount=cart[i].subtotal-(cart[i].subtotal*discount)/100;
        }else{cart[i].subtotalWithDiscount='No discount'}
    }
}





// Exercise 8
 // 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
//console.log('Quin producte vols afegir?:');
//mostraProductes(products);//retorna l'array products amb un número d'id
function addToCart(id){
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
    }
}



// Exercise 9
// 1. Loop for to the array products to get the item to add to cart
//console.log('Quin producte vols esborrar?:');
mostraProductes(cart);//retorna l'array products amb un número d'id
function removeFromCart(id) {
    // 2. Add found product to the cartList array
    cart.splice(id-1,1);
}


// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}