document.addEventListener('DOMContentLoaded', () => {
  let globalCartTotal = 0;
  const cartCountEl = document.getElementById('cart-count');
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const btnMinus = card.querySelector('.btn-qty.minus');
    const btnPlus = card.querySelector('.btn-qty.plus');
    const qtyInput = card.querySelector('.qty-input');
    const btnAddCart = card.querySelector('.btn-add-cart');

    // Botón restar
    btnMinus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value);
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
      }
    });

    // Botón sumar
    btnPlus.addEventListener('click', () => {
      let currentVal = parseInt(qtyInput.value);
      if (currentVal < 10) {
        qtyInput.value = currentVal + 1;
      }
    });

    // Botón Agregar al Carrito
    btnAddCart.addEventListener('click', () => {
      const addedQuantity = parseInt(qtyInput.value);
      globalCartTotal += addedQuantity;
      cartCountEl.textContent = globalCartTotal;

      // Feedback visual temporal
      const originalText = btnAddCart.textContent;
      btnAddCart.textContent = '¡Agregado! ✓';
      btnAddCart.style.backgroundColor = '#27ae60';

      setTimeout(() => {
        btnAddCart.textContent = originalText;
        btnAddCart.style.backgroundColor = '';
      }, 1500);
    });
  });
});