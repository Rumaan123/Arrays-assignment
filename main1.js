"use strict";
//part 1 :basic arrays -product inventory....
Object.defineProperty(exports, "__esModule", { value: true });
var products = [
    {
        name: "Laptop",
        price: 50000,
        inventory: {
            stock: 50,
            colorOptions: ["black", "red", "blue"]
        }
    },
    {
        name: "Smartphone",
        price: 35000,
        inventory: {
            stock: 200,
            colorOptions: ["black", "red", "blue"]
        }
    },
    {
        name: "Headphones",
        price: 2500,
        inventory: {
            stock: 150,
            colorOptions: ["black", "red", "blue"]
        }
    }
];
function changeColor(product, newColor) {
    // Update the color property of the product
    product.color = newColor;
    // Adjust the price based on the new color
    switch (newColor.toLowerCase()) {
        case "red":
            // Increase price by 10%
            product.price *= 1.1;
            break;
        case "blue":
            // Decrease price by 5%
            product.price *= 0.95;
            break;
        // You can add more cases for other colors if needed
        default:
            // No price adjustment for other colors
            break;
    }
}
function displayProducts(products) {
    products.forEach(function (product) {
        console.log("Name: ".concat(product.name));
        console.log("Price: $".concat(product.price.toFixed(2)));
        console.log("Stock: ".concat(product.inventory.stock));
        console.log("Color Options: ".concat(product.inventory.colorOptions.join(', ')));
        console.log("Selected Color: ".concat(product.color ? product.color : "Blue"));
        console.log('-------------------');
    });
}
// Example usage
changeColor(products[0], "red");
displayProducts(products);
