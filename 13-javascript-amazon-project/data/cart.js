export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptions: '1'
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptions: '2'
  }];
  
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);

  if(matchingItem){
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId:'1'
    });
  }

  saveToStorage();
};

export function addToCartMessage(productId){
  const addedMessageTimeouts = {};
  const addedToCartMessage = document.querySelector(`.js-added-to-cart-${productId}`);

       addedToCartMessage.classList.add('added-to-cart-visible');
       
       const previousTimeoutId = addedMessageTimeouts[productId];
       if (previousTimeoutId) {
         clearTimeout(previousTimeoutId);
       }
 
       const timeoutId = setTimeout(() => {
        addedToCartMessage.classList.remove('added-to-cart-visible');
       }, 2000);
 
       addedMessageTimeouts[productId] = timeoutId;
};

export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};

export function calculateQuantity(){
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
     cartQuantity += cartItem.quantity;
  })
  return cartQuantity;
};

export function updateQuantity(productId, newQuantity){
  let matchingItem;

  cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem
      }
  });

  matchingItem.quantity = newQuantity;
  console.log(cart);
   saveToStorage();
  
};
