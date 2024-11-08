
const quantityInput = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("total-price");
const buyNowButton = document.getElementById("buy-now");

const pricePerItem = 199;

function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * pricePerItem;
    totalPriceDisplay.textContent = totalPrice;
}


quantityInput.addEventListener("input", updateTotalPrice);


buyNowButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * pricePerItem;
    alert(`You added ${quantity} items to your cart for Rs.${totalPrice}`);
});

updateTotalPrice();


const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.getElementById("close-modal");

buyNowButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * pricePerItem;
    modalMessage.textContent = `You added ${quantity} items to your cart for Rs.${totalPrice}`;
    modal.style.display = "flex"; 
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none"; 
});

updateTotalPrice();

