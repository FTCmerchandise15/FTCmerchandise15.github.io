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

 var itemList = document.getElementById('itemList');
                itemList.appendChild(newItem);

   <input type="text" id="itemInput" placeholder="Enter an item" />
    
    <!-- Button to add the item to the list -->
    <button onclick="addItem()">Add Item</button>

    <!-- The list where items will be added -->
    <ul id="itemList">
        <!-- Items will be dynamically added here -->
    </ul>

    <script>
        // Function to add a new item to the list
        function addItem() {
            // Get the value from the input field
            var itemInput = document.getElementById('itemInput');
            var itemValue = itemInput.value.trim();  // Trim whitespace

            // Check if the input value is not empty
            if (itemValue !== '') {
                // Create a new list item (li)
                var newItem = document.createElement('li');
                newItem.textContent = itemValue; // Set the text of the new item

                // Add the new item to the list (ul)
                var itemList = document.getElementById('itemList');
                itemList.appendChild(newItem);

                // Clear the input field after adding the item
                itemInput.value = '';
            } else {
                // If the input is empty, show an alert
                alert('Please enter an item.');
            }
        }
    </script>

