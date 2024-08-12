export const cart = [];


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
      quantity
    });
  }
};

export function addToCartMessage(productId){
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
}
