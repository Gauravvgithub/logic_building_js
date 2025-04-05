
// Question : 1
//Inventory Management (Array)
/* You are working at a store that has an inventory list of products. You are given an array of product names that are currently in stock. Write a function to check if a specific product is in stock.*/

//--> answer


function checkStock(inventory, products) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === products) {
            return true;
        }
        return false;
    };
};
const products = ["charger", "headphone", "laptop", "mobile", "cables"];

console.log(checkStock(products, "macBook")); // output : false
console.log(checkStock(products, "charger")); // output : true

// Question : 2
// User Profile (Object)
/* You’re building a profile system. Each user’s profile is stored as an object with name, email, and age properties. Write a function to update a user’s email address when given their name.*/

//--> answer

const users = [
    { name: "Jarvis", email: "jarvis@meta.com", age: 45 },
    { name: "Goyal", email: "goyal@tata.com", age: 55 },
    { name: "Robin", email: "robin@bata.com", age: 35 }
];

function updateEmail(users, name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            return true;
        };
    };
    return false;
};

updateEmail(users, "Jarvis", "jarvis@google.com");
console.log(users[0].email);
console.log(users);

// Question : 3
// List of Tasks (Array)
/* You are working on a to-do list app, where tasks are stored in an array. Each task has a name and status (either "done" or "pending"). Write a function to count how many tasks are pending.*/

//--> answer

const tasks = [
    { name: "running 5km", status: "done" },
    { name: "buy gifts", status: "pending" },
    { name: "call to friends", status: "pending" },
    { name: "pay bills", status: "done" },
    { name: "study js", status: "done" },
    { name: "buy products", status: "pending" },
    { name: "charge laptop", status: "pending" },
    { name: "write a email to manager", status: "done" }
];

function isPendingTasks(tasks) {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "pending") {
            count++;
        };
    };
    return count;
};

console.log(isPendingTasks(tasks));

//Question : 4
//Product Pricing (Object)
/* You’re managing a catalog of products where each product is represented as an object with properties: name, category, and price. Write a function that updates the price of a specific product.*/

//--> answer

const productsTwo = [
    { name: "Washing Machine", category: "Electronics", price: 18500 },
    { name: "Jeans", category: "Clothing", price: 800 },
    { name: "Wheat Flour", category: "Grocery", price: 450 }
];

function updatePrice(productsTwo, name, newPrice) {
    for (let i = 0; i < productsTwo.length; i++) {
        if (productsTwo[i].name === name) {
            productsTwo[i].price = newPrice
            return true;
        }
    }
    return false;
}
updatePrice(productsTwo, "Wheat Flour", 300)
console.log(productsTwo[2].price)

//Question : 5
// Student Scores (Array)
/* You have an array of student scores, and you need to calculate the average score. Write a function to return the average score from the array.*/

//--> answer

const studentScores = [90, 75, 88, 95, 65, 35, 99, 50, 45, 80]

function calculateAvg(studentScores) {
    if (studentScores.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < studentScores.length; i++) {
        sum += studentScores[i];
    }
    return Math.floor(sum / studentScores.length)
}

const average = calculateAvg(studentScores)
console.log("Average", average)

//Question : 6
//Removing Users from List (Array)
/* You have a list of registered users in an array. Each user is represented by their name. Write a function to remove a user from the list when given their name.*/

//-->answer

const peoples = ["vikram", "messi", "nergis", "mendis"];
// console.log(peoples)

function removePeople(peoples, nameRemove) {
    const index = peoples.indexOf(nameRemove);
    if (index !== -1) {
        peoples.splice(index, 1)
        return true
    }
    return false
}
removePeople(peoples, "nergis")
console.log(peoples)

//Question : 7
//Employee Directory (Object)
/* You have an object where the keys are employee names and the values are their job titles. Write a function to check if a specific employee exists in the directory.*/

//--> answer

const directory = {
    suraj: "graphic desginer",
    dhruv: "photographer",
    hansu: "solider"
}

function employeeExists(directory, name) {
    return name in directory
}
console.log(employeeExists(directory, "lucky"))
console.log(employeeExists(directory, "suraj"))

//Question : 8
//Guest List (Array)
/* You are organizing an event, and you have an array of guest names. Write a function to check if a particular guest has RSVP’d (is in the array).*/

//--> answer

const guestList = ["jack", "conor", "mike", "tyson", "bella"]

function hasRSVP(guestList, guestName) {
    return guestList.includes(guestName)
}
console.log(hasRSVP(guestList, "gaurav"))
console.log(hasRSVP(guestList, "mike"))

//Question : 9
//Find Product by ID (Object)
/* You have a product catalog where each product has an id and name. Write a function that takes an ID and returns the product with that ID.*/

//--> answer

const productCatalog = [
    { id: 1, name: "charger" },
    { id: 2, name: "cables" },
    { id: 3, name: "wires" }
]

function findProductById(productCatalog, id) {
    for (let i = 0; i < productCatalog.length; i++) {
        if (productCatalog[i].id === id) {
            return productCatalog[i];
        }
    }
    return "Product not found";
}

console.log(findProductById(productCatalog, 2));
console.log(findProductById(productCatalog, 5));