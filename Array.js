// Initialize an empty array
let itemsArray = [];

// Function to add item to the array
function addItem() {
    // Get the value from the input field
    const inputField = document.getElementById('itemInput');
    const newItem = inputField.value.trim();

    // Check if the input is not empty
    if (newItem !== '') {
        // Add the new item to the array
        itemsArray.push(newItem);

        // Update the displayed list of items
        displayItems();

        // Clear the input field for the next item
        inputField.value = '';
    } else {
        alert('Please enter a valid item!');
    }
}

// Function to display the items in the array
function displayItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = ''; // Clear current list

    // Iterate over the array and create list items for each
    itemsArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemsList.appendChild(li);
    });
}


