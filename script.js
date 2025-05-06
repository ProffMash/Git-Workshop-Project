
var nums = document.querySelectorAll("#num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8, #num9, #num10");


function calculateSubtotal() {
    var subtotalValue = 0; // Initialize subtotal value
    var items = document.querySelectorAll(".cart-item"); // Select all cart items

    items.forEach(function(item) {
        var priceElement = item.querySelector(".item-price");
        var quantityElement = item.querySelector(".quantity-input");

        var price = parseFloat(priceElement.innerHTML.replace('$', '')) || 0; // Get price and convert to float
        var quantity = parseInt(quantityElement.innerHTML) || 0; // Get quantity

        subtotalValue += price * quantity; // Calculate subtotal
    });

    var subtotalDisplay = document.querySelector(".subtotal");
    subtotalDisplay.innerHTML = `$${subtotalValue.toFixed(2)}`; // Update subtotal display
}


function IncreaseQuantity(element) {
    var value = parseInt(element.innerHTML) || 0; // Default to 0 if NaN
    if (value <= 99) { // Prevent going above 99
        element.innerHTML = value + 1;
    }
}
function IncreaseQuantityByLarge(element) {
    var value = parseInt(element.innerHTML) || 0; // Default to 0 if NaN
    if (value < 99) { // Prevent going above 99
        element.innerHTML = value + 10;
    }
}

function DecreaseQuantity(element) {
    var value = parseInt(element.innerHTML) || 0; // Default to 0 if NaN
    if (value > 0) { // Prevent going below 1
        element.innerHTML = value - 1;
    }
}

function DecreaseQuantityByLarge(element) {
    var value = parseInt(element.innerHTML) || 0; // Default to 0 if NaN
    if (value > 10) { // Prevent going below 10
        element.innerHTML = value - 10;
    }
}

