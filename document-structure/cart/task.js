const productQuantityControlsDec = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const productQuantityControlsInc = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const productAdd = document.querySelectorAll(".product__add");

[...productQuantityControlsInc].forEach((element) => {
  element.addEventListener("click", () => {
    +element.previousElementSibling.textContent++;
  });
});

[...productQuantityControlsDec].forEach((element) => {
  element.addEventListener("click", () => {
    const value = +element.nextElementSibling.textContent;
    if (value > 1) {
      +element.nextElementSibling.textContent--;
    } else {
      element.nextElementSibling.textContent = "1";
    }
  });
});
[...productAdd].forEach((element) => {
  element.addEventListener("click", () => {
    const productItem = element.closest(".product");
    const productImage = productItem.querySelector("img");
    const productId = productItem.dataset.id;
    const productAmount = productItem.querySelector(".product__quantity-value");
    const productsCart = document.querySelector(".cart__products");

    const productCart = [
      ...productsCart.getElementsByClassName("cart__product"),
    ].find((item) => item.dataset.id === productItem.dataset.id);

    if (productCart) {
      const productCartCount = productCart.querySelector(
        ".cart__product-count"
      );
      productCartCount.textContent =
        Number(productCartCount.textContent) +
        Number(productAmount.textContent);
    } else {
      productsCart.innerHTML += `<div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage.src}">
        <div class="cart__product-count">${productAmount.textContent}</div>
    </div>`;
    }
  });
});
