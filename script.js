let addcartBtn = document.getElementsByClassName('addcart')
for(let i=0;i<addcartBtn.length;i++) {
    let btn = addcartBtn[i]
    btn.addEventListener('click',addToCart)
}
function addToCart(event) {
    let button = event.target
    let itemTobeAdded = button.parentElement.parentElement
    let title = itemTobeAdded.getElementsByClassName('title')[0].innerText
    let image = itemTobeAdded.getElementsByClassName('images')[0].src
    let price = itemTobeAdded.getElementsByClassName('amount')[0].innerText
   addingItem(title,image,price)
updateCartTotal();
}

function addingItem(title,image,price) {
    let cartRow = document.createElement('div')
    cartRow.classList='cart-row'
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let content =  ` <div class="cart-item cart-column">
    <img class="cart-item-image" src=${image} width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>`
cartRow.innerHTML = content
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn btn-danger')[0].addEventListener('click',removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

updateCartTotal()
alert('Product Successfully Added')

}
//Purchase button
document.getElementsByClassName('btn btn-primary btn-purchase')[0].addEventListener('click',purchaseClicked);
function purchaseClicked(){
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
updateCartTotal()
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
     
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


// Remove item from cart
var removeCartItemButtons=document.getElementsByClassName('btn btn-danger');
//console.log(removeCartitembuttons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
     button.addEventListener('click', removeCartItem)
 } 
 function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

let open = document.getElementsByClassName("seecart");
const close = document.getElementById("close");
const container = document.getElementById("container");

for(let i=0;i<open.length;i++) {
    let btn=open[i]
    btn.addEventListener("click", showcart)

}

function showcart() {
    container.classList.add("active");
}

close.addEventListener("click", () => {
    container.classList.remove("active");
});
//window.addEventListener('DOMContentLoaded',()=>{
   // axios.get('http://localhost:3000/products')
   // .then((productInfo)=>{
        // console.log(productInfo)
        //if(productInfo.request.status === 200)  { 
            //const products = productInfo.data.products
            // console.log(products)

            //const parent = document.getElementById('products')

//products.forEach(products=>{
           //     const childHTML = ` <div class="albums">
//<h3 class="title">${products.title}</h3>
                //<img
//class="images"
                  //src="${products.imageUrl}"
                 // alt="${products.title}"
              //  />
               // <div class="price">
                //  <h4 class="amount">${products.price}$</h4>
                 // <button class="addcart">Add to Cart</button>
                //</div>
             // </div>`

            //  parent.innerHTML += childHTML
            //})
       // }

//})
//})