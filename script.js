// Define a variable to store the current value displayed on the calculator
let displayValue = '';

// Function to append value to the display
function appendToDisplay(value) {
    // If the value is '#' (clear), clear the display
    if (value === '#') {
        clearDisplay();
        return;
    }
    
    // Append the value to the displayValue variable
    displayValue += value;
    // Update the input field with the new value
    document.querySelector('input[name="display"]').value = displayValue;
}

// Function to perform calculation
function calculate() {
    try {
        // Evaluate the expression stored in displayValue using the eval() function
        displayValue = eval(displayValue);
        // Update the input field with the result
        document.querySelector('input[name="display"]').value = displayValue;
    } catch (error) {
        // If an error occurs during evaluation, display "Error" in the input field
        document.querySelector('input[name="display"]').value = 'Error';
    }
}

// Function to delete the last character from the display
function deleteLast() {
    // Remove the last character from the displayValue variable
    displayValue = displayValue.slice(0, -1);
    // Update the input field with the new value
    document.querySelector('input[name="display"]').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    // Clear the displayValue variable
    displayValue = '';
    // Update the input field to an empty string
    document.querySelector('input[name="display"]').value = displayValue;

