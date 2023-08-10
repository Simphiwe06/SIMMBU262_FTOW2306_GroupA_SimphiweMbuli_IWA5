const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';

let loc = 'RSA'; // Renamed the variable to 'loc'
let currency = 'R';
let shipping = null;
let customers = 1;

function calculateShipping(location) {
  if (loc === 'RSA') { // Changed 'location' to 'loc'
    shipping = 400;
  } else if (loc === 'NAM') { // Changed 'location' to 'loc'
    shipping = 600;
  } else {
    shipping = 800;
  }
}

function checkFreeShipping(totalCost, location, customers) {
  if (totalCost >= 1000 && (loc === 'RSA' || loc === 'NAM') && customers === 1) { // Changed 'location' to 'loc'
    shipping = 0;
  } else if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }
}

function calculateTotalCost(shoes, toys, shirts, batteries, pens) {
  return shoes + toys + shirts + batteries + pens;
}

// Main code block
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries = 35 * 2;
const pens = 5 * 0;

const totalCost = calculateTotalCost(shoes, toys, shirts, batteries, pens);

if (loc === 'NK') { // Changed 'location' to 'loc'
  console.log(BANNED_WARNING);
} else {
  calculateShipping(loc); // Changed 'location' to 'loc'

  checkFreeShipping(totalCost, loc, customers); // Changed 'location' to 'loc'

  console.log('Price:', currency, totalCost + shipping);
}
