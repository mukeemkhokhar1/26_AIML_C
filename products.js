let productprice=Number(prompt("enter the productprice"));


let product = {
    ID: "acb",
    pname: "Nike",
    price: productprice,
    quantity: 1,

    calculateTotalPrice: function() {
        return product.price * product.quantity;
    },

   
    upquantity: function(newQuantity) {
        product.quantity = newQuantity;
        console.log("Quantity updated to ",product.quantity);
    },

   
    displayInfo: function() {
       
        console.log("Product ID   :", product.ID);
        console.log("Product Name :", product.pname);
        console.log("Price: ",product.price);
        console.log("product quantty: ",product.quantity);
        console.log("t_cost: ",product.calculateTotalPrice());
        
    }
};


product.displayInfo();
let c= Number(prompt("Enter the quantity"));
product.upquantity(c);
product.displayInfo();