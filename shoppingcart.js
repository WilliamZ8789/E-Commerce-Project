// S = 64
// A = 52
// B = 40
// C = 28
// D = 16
// F =< 4

const shoppingList = [
  // All-Purpose Enchantments
  { name: "Mending", price: 20, category: "All-Purpose Enchantments" },
  { name: "Unbreaking III", price: 28, category: "All-Purpose Enchantments" },
  { name: "Curse of Vanishing", price: 20, category: "All-Purpose Enchantments" },
  
  // Armor Enchantments
  { name: "Aqua Affinity", price: 12, category: "Armor Enchantments" },
  { name: "Blast Protection IV", price: 36, category: "Armor Enchantments" },
  { name: "Curse of Binding", price: 20, category: "Armor Enchantments" },
  { name: "Depth Strider III", price: 28, category: "Armor Enchantments" },
  { name: "Feather Falling IV", price: 36, category: "Armor Enchantments" },
  { name: "Fire Protection IV", price: 36, category: "Armor Enchantments" },
  { name: "Frost Walker II", price: 40, category: "Armor Enchantments" },
  { name: "Projectile Protection IV", price: 36, category: "Armor Enchantments" },
  { name: "Protection IV", price: 36, category: "Armor Enchantments" },
  { name: "Respiration III", price: 28, category: "Armor Enchantments" },
  { name: "Soul Speed III", price: 60, category: "Armor Enchantments" },
  { name: "Swift Sneak III", price: 60, category: "Armor Enchantments" },
  { name: "Thorns III", price: 28, category: "Armor Enchantments" },
  
  // Melee Weapon Enchantments
  { name: "Bane of Arthropods V", price: 44, category: "Melee Weapon Enchantments" },
  { name: "Breach IV", price: 36, category: "Melee Weapon Enchantments" },
  { name: "Density V", price: 44, category: "Melee Weapon Enchantments" },
  { name: "Fire Aspect II", price: 20, category: "Melee Weapon Enchantments" },
  { name: "Knockback II", price: 20, category: "Melee Weapon Enchantments" },
  { name: "Looting III", price: 28, category: "Melee Weapon Enchantments" },
  { name: "Lunge III", price: 28, category: "Melee Weapon Enchantments" },
  { name: "Sharpness V", price: 44, category: "Melee Weapon Enchantments" },
  { name: "Smite V", price: 44, category: "Melee Weapon Enchantments" },
  { name: "Sweeping Edge III", price: 28, category: "Melee Weapon Enchantments" },
  { name: "Wind Burst III", price: 44, category: "Melee Weapon Enchantments" },
  
  // Ranged Weapon Enchantments
  { name: "Channeling", price: 12, category: "Ranged Weapon Enchantments" },
  { name: "Flame", price: 12, category: "Ranged Weapon Enchantments" },
  { name: "Impaling V", price: 44, category: "Ranged Weapon Enchantments" },
  { name: "Infinity", price: 12, category: "Ranged Weapon Enchantments" },
  { name: "Loyalty III", price: 28, category: "Ranged Weapon Enchantments" },
  { name: "Multishot", price: 12, category: "Ranged Weapon Enchantments" },
  { name: "Piercing IV", price: 36, category: "Ranged Weapon Enchantments" },
  { name: "Power V", price: 44, category: "Ranged Weapon Enchantments" },
  { name: "Punch II", price: 20, category: "Ranged Weapon Enchantments" },
  { name: "Quick Charge III", price: 28, category: "Ranged Weapon Enchantments" },
  { name: "Riptide III", price: 28, category: "Ranged Weapon Enchantments" },
  
  // Tool Enchantments
  { name: "Efficiency V", price: 44, category: "Tool Enchantments" },
  { name: "Fortune III", price: 28, category: "Tool Enchantments" },
  { name: "Luck of the Sea III", price: 28, category: "Tool Enchantments" },
  { name: "Lure III", price: 28, category: "Tool Enchantments" },
  { name: "Silk Touch", price: 12, category: "Tool Enchantments" }
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
//console.log(roundedPrice);

x = document.querySelector(".pop");
x.style.display = "flex";