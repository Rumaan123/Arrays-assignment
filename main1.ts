//part 1 :basic arrays -product inventory....

export type Product = {
    name: string;
    price: number;
    color?: string; // Make color optional if you want to change it later
    inventory: {
        stock: number;
        colorOptions: string[];
    };
};

const products: Product[] = [
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

function changeColor(product: Product, newColor: string) {
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

function displayProducts(products: Product[]) {
    products.forEach(product => {
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price.toFixed(2)}`);
        console.log(`Stock: ${product.inventory.stock}`);
        console.log(`Color Options: ${product.inventory.colorOptions.join(', ')}`);
        console.log(`Selected Color: ${product.color ? product.color : "Blue"}`);
        console.log('-------------------');
    });
}

// Example usage
changeColor(products[0], "red");
displayProducts(products);
