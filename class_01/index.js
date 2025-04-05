// Date - 29/March/2025



// Employee Bonuses (Object + Loop)
// Question : 1.  You are handling employee performance reviews. Each employee is represented as an object with name and performanceScore. Write a function that calculates a 10% bonus for employees with a performance score higher than 80 ?

// Solution : 

const employees = [{
    name:"reema",
    score:81,
    salary:84000
},
{
    name:"yasika",
    score:80,
    salary:94000
},
{
    name:"usha",
    score:94,
    salary:74000
}];

function bonus(salary){
    return (salary*10)/100
}


function IncreaseScore(employees){
    employees.forEach(emp =>{
        // console.log(emp.salary)
        if (emp.score>= 80) {
            emp.salary += emp.salary*10/100
        }else{
            return emp.bonus = 0
        }
        // console.log(`Name:${emp.name} ,Salary: ${emp.salary}, Score: ${emp.score}`);
    })
    return employees
    
}
console.log(IncreaseScore(employees))