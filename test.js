//      #1
const user = {
    mood: "upset",
    hobby:"basketball",
    premium: true,
}
function changeMood(mood){
    user.mood = "happy"
    return user.mood;
}
changeMood(user.mood);

function changeHobby(hobby){
user.hobby = "skydiving"
return user.hobby
}
changeHobby(user.hobby)

function changeSubscribtion(premium){
user.premium = false
return user.premium;
}
changeSubscribtion(user.premium)

console.log(changeMood(user))
console.log(changeHobby(user))
console.log(changeSubscribtion(user))

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }


//   #3
  const employees = {
    dina: 42,
    daras: 67,
   denis: 35,
  };

  function findBestEmployee(employees) {
    let bestWorker = "";
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestWorker = name;
      }
    }
    return bestWorker;
  } 
  console.log(findBestEmployee(employees)); 

  //    #4

const income = {
  Dina: 15000,
  Taras: 20000,
 Denis: 15000,
 Dima:15000,
 Nastya:15000,
}
const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let salary = 0;
  for (const value of values) {
    salary += value;
  }
  return salary;
};
console.log(countTotalSalary(income));


  // #6

  const products = [
    {
      name: "клавіатура",
      price: 2500,
      amount:43,
    },
    {
      name: "мишка",
      price: 1500,
      amount: 34,
    },
    {
      name: "коврик для миші",
      price: 700,
      amount:23,
    },
    {
      name: "монітор",
      price: 7500,
      amount: 12,
    },
  ];

  const calculateTotalPrice = function (allProdcuts, productName) {
    let total = 0;
    for (const product of allProdcuts) {
      if (product.name === productName) {
        total = product.amount * product.price;
      }
    }
    return `${productName}: ${total} грн`;
  };

console.log(calculateTotalPrice(products, "клавіатура"));
console.log(calculateTotalPrice(products, "мишка"));
console.log(calculateTotalPrice(products, "коврик для миші"));
console.log(calculateTotalPrice(products, "монітор"));
