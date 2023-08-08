const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';

// Initial variable declarations
let location = 'RSA';
let currency = 'R';
let shipping = null;
let customers = 1;

// Function to calculate shipping cost based on location
function calculateShipping(location) {
  if (location === 'RSA') {
    shipping = 400;
  } else if (location === 'NAM') {
    shipping = 600;
  } else {
    shipping = 800;
  }
}

// Function to check if free shipping applies
function checkFreeShipping(totalCost, location, customers) {
  if (totalCost >= 1000 && (location === 'RSA' || location === 'NAM') && customers === 1) {
    shipping = 0;
  } else if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }
}

// Function to calculate the total cost
function calculateTotalCost(shoes, toys, shirts, batteries, pens) {
  return shoes + toys + shirts + batteries + pens;
}

// Main code block
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0; // 'NONE_SELECTED' replaced with 0
const batteries = 35 * 2;
const pens = 5 * 0; // 'NONE_SELECTED' replaced with 0

// Calculate the total cost
const totalCost = calculateTotalCost(shoes, toys, shirts, batteries, pens);

// Check if location is North Korea
if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  // Calculate the shipping cost based on location
  calculateShipping(location);

  // Check if free shipping applies
  checkFreeShipping(totalCost, location, customers);

  // Log the final price and currency to the console
  console.log('Price:', currency, totalCost + shipping);
}
