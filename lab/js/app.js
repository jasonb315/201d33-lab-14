'use strict';
var itemsInCart = [];
var allProductNames = []; //;populated correctly!!;
var allProducts =[];


var shoppingCart = [];

// var ShoppingCart = function(){
//   this.cartContents = []; //populate with complete product array with 0 each
// }

var CartItem = function(name, quantity){
  this.name = name;
  this.quantity = quantity;
}

var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  allProductNames.push(this.name);
  allProducts.push(this);
};


function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
  //render pictures?

}

generateCatalog();


var listPut = document.getElementById('items');
function dropDown (){
  for (var i = 0 ; i < allProducts.length ; i++){
    
    var option = document.createElement('option');
    option.textContent = allProductNames[i];
    listPut.appendChild(option);
  }
}

dropDown();

function populateCart(){
  //for the legnth of products, create an object for each with a quantity key.
  for (var p = 0 ; p < allProducts.length ; p++){
    var cartItem = new CartItem(allProductNames[p], 0);
    shoppingCart.push(cartItem);
  }
}

populateCart();

var submittt = document.getElementById('catalog');
submittt.addEventListener('submit', cartDater);


var cartSection = document.getElementById('cartContents');

function generateHeader(){
  var headerTrElement = document.createElement('tr');
  var thItem = document.createElement('th');
  var thNumber = document.createElement('th');
  thItem.textContent = 'ITEM:';
  thNumber.textContent = 'Quantity:'
  headerTrElement.appendChild(thItem);
  headerTrElement.appendChild(thNumber);
  cartSection.appendChild(headerTrElement);
}
generateHeader();

function cartDater (event){
  event.preventDefault();
  var itemx = event.target.items.value;
  var quanx = event.target.quantity.value;

  var quany = parseInt(quanx);

  for(var i =0 ; i < shoppingCart.length ; i++){
    if(shoppingCart[i].name === itemx){
      shoppingCart[i].quantity = (shoppingCart[i].quantity + quany); //globararrayupdated
      localStorage.setItem('localCart', JSON.stringify(shoppingCart)); //localstorage updated
    }
  }

  for (var i =0 ; i < shoppingCart.length ; i++){
    if (shoppingCart[i].quantity > 0){
      var listRow = document.createElement('tr');
      var listItem = document.createElement('td');
      var listNumber = document.createElement('td');
      listItem.textContent = shoppingCart[i].name;
      listNumber.textContent = shoppingCart[i].quantity;
      listRow.appendChild(listItem);
      listRow.appendChild(listNumber);
      cartSection.appendChild(listRow);
    }
  }

//update cart display
// var cartRow = document.createElement('option');

  console.log('ding!');
}