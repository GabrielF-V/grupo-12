document.addEventListener('DOMContentLoaded', () => {
  const btnMinus = document.getElementById('btn-minus');
  const btnPlus = document.getElementById('btn-plus');
  const qtyInput = document.getElementById('qty-input');
  const btnAddCart = document.getElementById('btn-add-cart');
  const cartCount = document.getElementById('cart-count');
  const cartMessage = document.getElementById('cart-message');

  let totalCartItems = 0;

  // Control de Cantidad (- / +)
  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let currentQty = parseInt(qtyInput.value) || 1;
      if (currentQty > 1) qtyInput.value = currentQty - 1;
    });

    btnPlus.addEventListener('click', () => {
      let currentQty = parseInt(qtyInput.value) || 1;
      if (currentQty < 10) qtyInput.value = currentQty + 1;
    });
  }

  // Agregar al Carrito
  if (btnAddCart) {
    btnAddCart.addEventListener('click', () => {
      const quantityToAdd = parseInt(qtyInput.value) || 1;
      totalCartItems += quantityToAdd;
      
      if (cartCount) cartCount.textContent = totalCartItems;

      if (cartMessage) {
        cartMessage.classList.remove('hidden');
        setTimeout(() => {
          cartMessage.classList.add('hidden');
        }, 3000);
      }
    });
  }
});