// const checkout = {

// items: [],

// total: 0,

// addItem(item) {

// if (typeof item.price !== 'number' || isNaN(item.price)) {

// console.log("Invalid price.");

// return;

// }

// this.items.push(item);

// this.total += item.price;

// },

// getTotal() {

// return Total:$${parseFloat(this.total).toFixed(2)}; } };

// checkout.addItem({ name: "Coffee Maker", price: "99.95" });

// checkout.addItem({ name: "Milk", price: 3.50 });

// console.log(checkout.getTotal()); // Expected issue !
const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Convert string price to number if needed
    if (isNaN(item.price)) {
      console.log("Invalid price.");
      return;
    }

    item.price = Number(item.price); // Ensure it's a number
    this.items.push(item);
    this.total += item.price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // String price handled
checkout.addItem({ name: "Milk", price: 3.50 });            // Valid
console.log(checkout.getTotal()); // ✅ Output: Total: $103.45
