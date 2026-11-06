// S = 99.99
// A = 71.99
// B = 48.99
// C = 30.99
// D = 17.99
// F =< 9.99

const shoppingList = [
  // All-Purpose Enchantments
  { name: "Mending", price: 99.99, category: "All-Purpose Enchantments" },
  { name: "Unbreaking", price: 99.99, category: "All-Purpose Enchantments" },
  { name: "Curse of Vanishing", price: 4.99, category: "All-Purpose Enchantments" },
  
  // Armor Enchantments
  { name: "Aqua Affinity", price: 71.99, category: "Armor Enchantments" },
  { name: "Blast Protection", price: 30.99, category: "Armor Enchantments" },
  { name: "Curse of Binding", price: 4.99, category: "Armor Enchantments" },
  { name: "Depth Strider", price: 71.99, category: "Armor Enchantments" },
  { name: "Feather Falling", price: 99.99, category: "Armor Enchantments" },
  { name: "Fire Protection", price: 30.99, category: "Armor Enchantments" },
  { name: "Frost Walker", price: 17.99, category: "Armor Enchantments" },
  { name: "Projectile Protection", price: 17.99, category: "Armor Enchantments" },
  { name: "Protection", price: 99.99, category: "Armor Enchantments" },
  { name: "Respiration", price: 48.99, category: "Armor Enchantments" },
  { name: "Soul Speed", price: 30.99, category: "Armor Enchantments" },
  { name: "Swift Sneak", price: 48.99, category: "Armor Enchantments" },
  { name: "Thorns", price: 48.99, category: "Armor Enchantments" },
  
  // Melee Weapon Enchantments
  { name: "Bane of Arthropods", price: 4.99, category: "Melee Weapon Enchantments" },
  { name: "Breach", price: 30.99, category: "Melee Weapon Enchantments" },
  { name: "Density", price: 99.99, category: "Melee Weapon Enchantments" },
  { name: "Fire Aspect", price: 48.99, category: "Melee Weapon Enchantments" },
  { name: "Knockback", price: 17.99, category: "Melee Weapon Enchantments" },
  { name: "Looting", price: 71.99, category: "Melee Weapon Enchantments" },
  { name: "Lunge", price: 71.99, category: "Melee Weapon Enchantments" },
  { name: "Sharpness", price: 99.99, category: "Melee Weapon Enchantments" },
  { name: "Smite", price: 30.99, category: "Melee Weapon Enchantments" },
  { name: "Sweeping Edge", price: 48.99, category: "Melee Weapon Enchantments" },
  { name: "Wind Burst", price: 99.99, category: "Melee Weapon Enchantments" },
  
  // Ranged Weapon Enchantments
  { name: "Channeling", price: 30.99, category: "Ranged Weapon Enchantments" },
  { name: "Flame", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Impaling", price: 17.99, category: "Ranged Weapon Enchantments" },
  { name: "Infinity", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Loyalty", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Multishot", price: 30.99, category: "Ranged Weapon Enchantments" },
  { name: "Piercing", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Power", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Punch", price: 71.99, category: "Ranged Weapon Enchantments" },
  { name: "Quick Charge", price: 48.99, category: "Ranged Weapon Enchantments" },
  { name: "Riptide", price: 48.99, category: "Ranged Weapon Enchantments" },
  
  // Tool Enchantments
  { name: "Efficiency", price: 99.99, category: "Tool Enchantments" },
  { name: "Fortune", price: 99.99, category: "Tool Enchantments" },
  { name: "Luck of the Sea", price: 48.99, category: "Tool Enchantments" },
  { name: "Lure", price: 71.99, category: "Tool Enchantments" },
  { name: "Silk Touch", price: 71.99, category: "Tool Enchantments" }
];

let cart = [];
let totalPrice = 0;

function addToCart(itemName) {
    const item = shoppingList.find(enchantment => enchantment.name === itemName);
    if (!item) {
        console.log(`Unable to add "${item.name}" because it's not a valid enchantment.`);
        return;
    } else if (item) {
        console.log(`${item.name} successfully added to cart!`);
        cart.push(item);
        totalPrice += item.price;
        return(cart);
    }
}
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        const removedItem = cart[itemIndex];
        console.log(`${removedItem.name} successfully removed from cart.`);
        cart.splice(itemIndex, 1);
        totalPrice -= removedItem.price;
        return(cart);
    } else {
        console.log(`Unable to remove "${itemName}" because it's not included in the cart.`);
        return;
    }
}
const roundedPrice = totalPrice.toFixed(2);

console.log(addToCart("Mending"));
console.log(addToCart("Lure"));
console.log(addToCart("Breach"));
console.log(addToCart("Efficiency"));
console.log(addToCart("Bane of Arthropods"));
console.log(removeFromCart("Lure"));
console.log(roundedPrice);