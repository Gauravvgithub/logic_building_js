const customers = [
    {
        name:"Gaurav",
        customerId:23,
        purchases:[
            {productId:2,price:10,quantity:5},
            {productId:4,price:20,quantity:15}]
    },
    {
        name:"Rahul",
        customerId:43,
        purchases:[
            {productId:12,price:29,quantity:5},
            {productId:14,price:2787,quantity:2}]
    },
    {
        name:"Ayush",
        customerId:223,
        purchases:[
            {productId:12,price:29,quantity:2},
            {productId:34,price:77,quantity:4}]
    },
    
]


function spentMoneyByParticularCustomer(cid){
    // let sum = 0;
    // for(let i=0;i<customers.length;i++){
    //     if(customers[i].customerId === cid){
        
    //             let purchasesArray = customers[i].purchases
    //         for(let j=0;j<purchasesArray.length;j++){
    //             sum = sum +purchasesArray[j].price*purchasesArray[j].quantity
    //         }
    //     }
    // }
    // return sum;

    let customer = customers.filter(item => item.customerId == cid)[0]
    let sum =0;
    for(let i=0;i<customer.purchases.length;i++){
        sum = sum + customer.purchases[i].price * customer.purchases[i].quantity 
    }
    return sum

}

// console.log(spentMoneyByParticularCustomer(23))

let employess = [
    {name:"Ritika",salary:20000,score:16},
    {name:"Gaurav",salary:30000,score:96},
    {name:"Anand",salary:5000,score:6},
]

function get5Percent(amt){
return (5/100)*amt
}

function increaseSalary(emp){
    
    for(let i=0;i<emp.length;i++){
        if(emp[i].score>75){
            emp[i].salary = get5Percent(emp[i].salary)+emp[i].salary
        }

    }
    return emp
}

// console.log(increaseSalary(employess))

let books = [{
    title:"Harry Potter",
    author:"DumbalDoor",
    status:"Borrowed"
},
{
    title:"Half GirlFriend",
    author:"AJ",
    status:"Available"
},
{
    title:"Outside India",
    author:"beyond",
    status:"Borrowed"
},
]

function giveMeBook(title){
    let AvailabityStatus = books.filter(book => book.title === title ) 
    if(AvailabityStatus[0].status === "Borrowed")   {
        console.log("Khali nhi hai")
        return;
    }

    if(AvailabityStatus.length===0)
        console.log("Kuch Nhi hai jao")
    else{
        AvailabityStatus[0].status = "Borrowed"
        console.log(AvailabityStatus[0])
    }
}
// giveMeBook('Half GirlFriend')

let products = [
    {pname:"P1",quantity:24,restock:4},
    {pname:"P2",quantity:34,restock:24},
    {pname:"P3",quantity:4,restock:87},
    {pname:"P4",quantity:2,restock:24},
]

function showlogs(products,min){
    products.forEach(item => {
        if(item.restock<=min){
            console.log(`${item.pname} please restock it`)
        }
    })
}

// showlogs(products,20)

//Array,loops,forEach,map,filter,reduce,objects