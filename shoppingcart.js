// S = 64
// A = 52
// B = 40
// C = 28
// D = 16
// F =< 4

const shoppingList = [
  // All-Purpose Enchantments
  { name: "Mending", emeralds: 64, category: "All-Purpose Enchantments" },
  { name: "Unbreaking", emeralds: 64, category: "All-Purpose Enchantments" },
  { name: "Curse of Vanishing", emeralds: 4, category: "All-Purpose Enchantments" },
  
  // Armor Enchantments
  { name: "Aqua Affinity", emeralds: 52, category: "Armor Enchantments" },
  { name: "Blast Protection", emeralds: 28, category: "Armor Enchantments" },
  { name: "Curse of Binding", emeralds: 4, category: "Armor Enchantments" },
  { name: "Depth Strider", emeralds: 52, category: "Armor Enchantments" },
  { name: "Feather Falling", emeralds: 64, category: "Armor Enchantments" },
  { name: "Fire Protection", emeralds: 28, category: "Armor Enchantments" },
  { name: "Frost Walker", emeralds: 16, category: "Armor Enchantments" },
  { name: "Projectile Protection", emeralds: 16, category: "Armor Enchantments" },
  { name: "Protection", emeralds: 64, category: "Armor Enchantments" },
  { name: "Respiration", emeralds: 40, category: "Armor Enchantments" },
  { name: "Soul Speed", emeralds: 28, category: "Armor Enchantments" },
  { name: "Swift Sneak", emeralds: 40, category: "Armor Enchantments" },
  { name: "Thorns", emeralds: 40, category: "Armor Enchantments" },
  
  // Melee Weapon Enchantments
  { name: "Bane of Arthropods", emeralds: 4, category: "Melee Weapon Enchantments" },
  { name: "Breach", emeralds: 28, category: "Melee Weapon Enchantments" },
  { name: "Density", emeralds: 64, category: "Melee Weapon Enchantments" },
  { name: "Fire Aspect", emeralds: 40, category: "Melee Weapon Enchantments" },
  { name: "Knockback", emeralds: 16, category: "Melee Weapon Enchantments" },
  { name: "Looting", emeralds: 52, category: "Melee Weapon Enchantments" },
  { name: "Lunge", emeralds: 52, category: "Melee Weapon Enchantments" },
  { name: "Sharpness", emeralds: 64, category: "Melee Weapon Enchantments" },
  { name: "Smite", emeralds: 28, category: "Melee Weapon Enchantments" },
  { name: "Sweeping Edge", emeralds: 40, category: "Melee Weapon Enchantments" },
  { name: "Wind Burst", emeralds: 64, category: "Melee Weapon Enchantments" },
  
  // Ranged Weapon Enchantments
  { name: "Channeling", emeralds: 28, category: "Ranged Weapon Enchantments" },
  { name: "Flame", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Impaling", emeralds: 64, category: "Ranged Weapon Enchantments" },
  { name: "Infinity", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Loyalty", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Multishot", emeralds: 28, category: "Ranged Weapon Enchantments" },
  { name: "Piercing", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Power", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Punch", emeralds: 52, category: "Ranged Weapon Enchantments" },
  { name: "Quick Charge", emeralds: 40, category: "Ranged Weapon Enchantments" },
  { name: "Riptide", emeralds: 40, category: "Ranged Weapon Enchantments" },
  
  // Tool Enchantments
  { name: "Efficiency", emeralds: 64, category: "Tool Enchantments" },
  { name: "Fortune", emeralds: 64, category: "Tool Enchantments" },
  { name: "Luck of the Sea", emeralds: 40, category: "Tool Enchantments" },
  { name: "Lure", emeralds: 52, category: "Tool Enchantments" },
  { name: "Silk Touch", emeralds: 64, category: "Tool Enchantments" }
];

let cart = [];
let totalEmeralds = 0;

function addToCart(itemName) {
    const item = shoppingList.find(enchantment => enchantment.name === itemName);
    if (!item) {
        console.log(`Unable to add "${item.name}" because it's not a valid enchantment.`);
        return;
    } else if (item) {
        console.log(`${item.name} successfully added to cart!`);
        cart.push(item);
        totalEmeralds += item.emeralds;
        return(cart);
    }
}
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        const removedItem = cart[itemIndex];
        console.log(`${removedItem.name} successfully removed from cart.`);
        cart.splice(itemIndex, 1);
        totalEmeralds -= removedItem.emeralds;
        return(cart);
    } else {
        console.log(`Unable to remove "${itemName}" because it's not included in the cart.`);
        return;
    }
}
/* const roundedemeralds = totalemeralds.toFixed(2); */

console.log(addToCart("Mending"));
console.log(addToCart("Lure"));
console.log(addToCart("Breach"));
console.log(addToCart("Efficiency"));
console.log(addToCart("Bane of Arthropods"));
console.log(removeFromCart("Lure"));
console.log(roundedEmeralds);