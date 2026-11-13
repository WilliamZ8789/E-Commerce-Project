// S = 64 6 4
// A = 71 5 2
// B = 40 4 0
// C = 28 2 8
// D = 16 1 6
// F =< 4 4

const shoppingList = [
  // All-Purpose Enchantments
  { name: "Mending", price: 64, category: "All-Purpose Enchantments" },
  { name: "Unbreaking", price: 64, category: "All-Purpose Enchantments" },
  { name: "Curse of Vanishing", price: 4, category: "All-Purpose Enchantments" },
  
  // Armor Enchantments
  { name: "Aqua Affinity", price: 52, category: "Armor Enchantments" },
  { name: "Blast Protection", price: 28, category: "Armor Enchantments" },
  { name: "Curse of Binding", price: 4, category: "Armor Enchantments" },
  { name: "Depth Strider", price: 71, category: "Armor Enchantments" },
  { name: "Feather Falling", price: 64, category: "Armor Enchantments" },
  { name: "Fire Protection", price: 28, category: "Armor Enchantments" },
  { name: "Frost Walker", price: 16, category: "Armor Enchantments" },
  { name: "Projectile Protection", price: 16, category: "Armor Enchantments" },
  { name: "Protection", price: 64, category: "Armor Enchantments" },
  { name: "Respiration", price: 40, category: "Armor Enchantments" },
  { name: "Soul Speed", price: 28, category: "Armor Enchantments" },
  { name: "Swift Sneak", price: 40, category: "Armor Enchantments" },
  { name: "Thorns", price: 40, category: "Armor Enchantments" },
  
  // Melee Weapon Enchantments
  { name: "Bane of Arthropods", price: 4, category: "Melee Weapon Enchantments" },
  { name: "Breach", price: 28, category: "Melee Weapon Enchantments" },
  { name: "Density", price: 64, category: "Melee Weapon Enchantments" },
  { name: "Fire Aspect", price: 40, category: "Melee Weapon Enchantments" },
  { name: "Knockback", price: 16, category: "Melee Weapon Enchantments" },
  { name: "Looting", price: 71, category: "Melee Weapon Enchantments" },
  { name: "Lunge", price: 71, category: "Melee Weapon Enchantments" },
  { name: "Sharpness", price: 64, category: "Melee Weapon Enchantments" },
  { name: "Smite", price: 28, category: "Melee Weapon Enchantments" },
  { name: "Sweeping Edge", price: 40, category: "Melee Weapon Enchantments" },
  { name: "Wind Burst", price: 64, category: "Melee Weapon Enchantments" },
  
  // Ranged Weapon Enchantments
  { name: "Channeling", price: 28, category: "Ranged Weapon Enchantments" },
  { name: "Flame", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Impaling", price: 64, category: "Ranged Weapon Enchantments" },
  { name: "Infinity", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Loyalty", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Multishot", price: 28, category: "Ranged Weapon Enchantments" },
  { name: "Piercing", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Power", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Punch", price: 71, category: "Ranged Weapon Enchantments" },
  { name: "Quick Charge", price: 40, category: "Ranged Weapon Enchantments" },
  { name: "Riptide", price: 40, category: "Ranged Weapon Enchantments" },
  
  // Tool Enchantments
  { name: "Efficiency", price: 64, category: "Tool Enchantments" },
  { name: "Fortune", price: 64, category: "Tool Enchantments" },
  { name: "Luck of the Sea", price: 40, category: "Tool Enchantments" },
  { name: "Lure", price: 71, category: "Tool Enchantments" },
  { name: "Silk Touch", price: 64, category: "Tool Enchantments" }
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
/* const roundedPrice = totalPrice.toFixed(2); */

console.log(addToCart("Mending"));
console.log(addToCart("Lure"));
console.log(addToCart("Breach"));
console.log(addToCart("Efficiency"));
console.log(addToCart("Bane of Arthropods"));
console.log(removeFromCart("Lure"));
console.log(roundedPrice);