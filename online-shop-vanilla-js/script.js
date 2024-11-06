const items = [
    {
        item__name: "Iphone 16 pro coffee color",
        item_image: "img/iphone-16-pro-coffee-color.png"
    },
    {
        item__name: "Iphone 16 pro white color",
        item_image: "img/iphone-16-pro-white-color.png"
    },
    {
        item__name: "Iphone 16 pro black color",
        item_image: "img/iphone-16-promax-black-color.png"
    },
    {
        item__name: "IPad air gray color",
        item_image: "img/ipad-air-gray-color.png"
    },
    {
        item__name: "IPad air pink color",
        item_image: "img/ipad-air-pink-color.png"
    },
    {
        item__name: "Macbook pro gray color",
        item_image: "img/macbook-pro-gray-color.png"
    }
];

// Get the container where the items will be displayed
const itemsContainer = document.querySelector('.items-container');

// Get the notification element
let notification = document.querySelector(".notification");

// Initialize the notification count
let notificationCount = 0;

// Function to create the item elements and append them to the container
function displayItems() {
    items.forEach(item => {
        // Create the item div
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        let imgElement = document.createElement('img');
        imgElement.src = item.item_image;
        imgElement.alt = item.item__name;

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('item__description');

        let nameParagraph = document.createElement('p');
        nameParagraph.classList.add('item__name');
        nameParagraph.textContent = item.item__name;

        let addButton = document.createElement('button');
        addButton.classList.add('btn_add');
        addButton.textContent = '+ Add to cart';

        descriptionDiv.appendChild(nameParagraph);
        descriptionDiv.appendChild(addButton);

        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(descriptionDiv);

        itemsContainer.appendChild(itemDiv);
    });

    addEventListenersToButtons();
}

const selectedItems = []; 

function addEventListenersToButtons() {
    let addBtns = document.querySelectorAll(".btn_add");

    addBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            notificationCount += 1;

            const item = items[index];
            const existingItem = selectedItems.find(i => i.item__name === item.item__name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                selectedItems.push({ ...item, quantity: 1 });
            }

            notification.innerHTML = notificationCount > 10 ? "10+" : notificationCount;

            sessionStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        });
    });
}


displayItems();




