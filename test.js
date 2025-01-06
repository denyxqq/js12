//      #1
const user = {
    mood: "upset",
    hobby:"basketball",
    premium: true,
}

const {mood, hobby, premium} = user;
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);


for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }


//   #3
//   const employees = {
//     dina: 42,
//     taras: 67,
//    denis: 35,
//    dima:35,
//    nastya:40,
//   };

//   const {dina, taras, denis, dima, nastya} = employees;

//   function findBestEmployee(employees) {
//     let max = 0;
//     let bestWorker = "" ;
//     for(const key in employees){
//         if(employees[key] > max){
//             max = employees[key];
//             bestWorker = key;
//         }
//     } 
//     return(bestWorker);
// }
// console.log(findBestEmployee(employees));
  //    #4

const income = {
  dina: 15000,
  taras: 20000,
 denis: 15000,
 dima:15000,
 nastya:15000,
}
const {dina, taras, denis, dima, nastya} = income;

function countTotalSalary(employees) {
  let maxIncome = 0;
  for(const key in employees){
      maxIncome += employees[key];
  }
  return(maxIncome);
}

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
