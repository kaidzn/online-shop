// Retrieve the selected items from session storage
const selectedItems = JSON.parse(sessionStorage.getItem('selectedItems')) || [];
const cartItemsContainer = document.querySelector('.items-container');
const totalAmountElement = document.getElementById('total-amount');

let totalAmount = 0;

// Function to display items in the cart
function displayCartItems() {
    selectedItems.forEach(item => {
        // Create the item div
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // Create the image element
        let imgElement = document.createElement('img');
        imgElement.src = item.item_image;
        imgElement.alt = item.item__name;

        // Create the description div
        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('item__description');

        // Create the name paragraph
        let nameParagraph = document.createElement('p');
        nameParagraph.classList.add('item__name');
        nameParagraph.textContent = item.item__name;

        // Create the quantity paragraph
        let quantityParagraph = document.createElement('p');
        quantityParagraph.classList.add('item__quantity');
        quantityParagraph.textContent = `X ${item.quantity}`;

        // Assuming each item has a price property
        let priceParagraph = document.createElement('p');
        priceParagraph.classList.add('item__price');
        let itemPrice = item.price || 0; // Use a default price if not set
        priceParagraph.textContent = `$${itemPrice.toFixed(2)}`;

        // Add the price to the total amount based on quantity
        totalAmount += item.quantity;
        Math.ceil(totalAmount);

        // Append the name, quantity, and price to the description div
        descriptionDiv.appendChild(nameParagraph);
        descriptionDiv.appendChild(quantityParagraph);

        // Append the image and description to the item div
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(descriptionDiv);

        // Append the item div to the container
        cartItemsContainer.appendChild(itemDiv);
    });

    // Update the total amount display
    totalAmountElement.textContent = totalAmount;
}

// Call the function to display cart items
displayCartItems();
