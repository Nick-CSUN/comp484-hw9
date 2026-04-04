// ==========================
// Part 1: Date Display
// ==========================

// Create Date object
let today = new Date();

// Get parts of the date
let month = today.getMonth() + 1; // 0-based
let day = today.getDate();
let year = today.getFullYear();

// Add leading zeros
month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

// Format string
let formattedDate = "Today is " + month + "/" + day + "/" + year;

// Display on page
document.getElementById("dateOutput").textContent = formattedDate;


// ==========================
// Part 2: Number Conversion
// ==========================

// Original values
let value1 = "42";
let value2 = "19.75";
let value3 = "hello";
let value4 = "100";

// Convert values
let num1 = Number(value1);
let num2 = Number(value2);
let num3 = Number(value3);
let num4 = Number(value4);

// Check values
let result1 = "Original: '" + value1 + "' → Converted: " + num1 +
  " → isNaN: " + Number.isNaN(num1) +
  " → isInteger: " + Number.isInteger(num1);

let result2 = "Original: '" + value2 + "' → Converted: " + num2 +
  " → isNaN: " + Number.isNaN(num2) +
  " → isInteger: " + Number.isInteger(num2);

let result3 = "Original: '" + value3 + "' → Converted: " + num3 +
  " → isNaN: " + Number.isNaN(num3) +
  " → isInteger: " + Number.isInteger(num3);

let result4 = "Original: '" + value4 + "' → Converted: " + num4 +
  " → isNaN: " + Number.isNaN(num4) +
  " → isInteger: " + Number.isInteger(num4);

// Combine results
let conversionOutput =
  result1 + "<br>" +
  result2 + "<br>" +
  result3 + "<br>" +
  result4;

// Display results
document.getElementById("numberConversionOutput").innerHTML = conversionOutput

// ==========================
// Part 3: Math & Formatting
// ==========================

// Values
let itemPrice = 25.5;
let taxRate = 0.1;
let shipping = 5;

// Calculations
let subtotal = itemPrice + shipping;
let tax = subtotal * taxRate;
let total = subtotal + tax;

// Format total
let formattedTotal = total.toFixed(2);

// Build output
let mathResults =
  "Item Price: $" + itemPrice + "<br>" +
  "Shipping: $" + shipping + "<br>" +
  "Subtotal: $" + subtotal + "<br>" +
  "Tax: $" + tax.toFixed(2) + "<br>" +
  "Total: $" + formattedTotal;

// Display
document.getElementById("mathOutput").innerHTML = mathResults;


// ==========================
// Part 4: Conditionals
// ==========================

// Condition 1: check NaN
let message1;
if (Number.isNaN(num3)) {
  message1 = "The value '"+value3+"' is NOT a valid number.";
} else {
  message1 = "The value is a valid number.";
}

// Condition 2: check passing total
let message2;
if (total > 30) {
  message2 = "Total cost is high.";
} else {
  message2 = "Total cost is low.";
}

// Append messages
document.getElementById("numberConversionOutput").innerHTML +=
  "<br><br>" + message1;

document.getElementById("mathOutput").innerHTML +=
  "<br><br>" + message2;