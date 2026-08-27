const product = {
    productID: "acb",
    productName: "redtape",
    price: 1500,
    quantity: 5,

    calculateTotalPrice: function() {
        return product.price * product.quantity;
    },

   
    updateQuantity: function(newQuantity) {
        product.quantity = newQuantity;
        console.log(`Quantity updated to ${product.quantity}`);
    },

   
    displayInfo: function() {
       
        console.log(`Product ID   : ${product.productID}`);
        console.log(`Product Name : ${product.productName}`);
        console.log(`Price        : ${product.price}`);
        console.log(`Quantity     : ${product.quantity}`);
        console.log(`Total Price  : ${product.calculateTotalPrice()}`);
    }
};


product.displayInfo();
let quantity=Number(prompt("Enter the quantity :"))

product.updateQuantity(quantity);
product.displayInfo();