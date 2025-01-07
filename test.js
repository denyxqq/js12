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


const userKey = Object.keys(user)
  for (const key of userKey){
  console.log(`${key} : ${user[key]}`)
}

  // #2
  function countProps(obj){
    let total = 0;
    for(const key in obj){
        total = total + 1;
    }
    console.log(total);
    }
    
    countProps(user);

//   #3
  const employees = {
    dina: 42,
    taras: 67,
   denis: 35,
   dima:35,
   nastya:40,
  };

  const {dina, taras, denis, dima, nastya} = employees;

  function findBestEmployee(employees) {
    let max = 0;
    let bestWorker = "" ;
    for(const key in employees){
        if(employees[key] > max){
            max = employees[key];
            bestWorker = key;
        }
    } 
    return(bestWorker);
}
console.log(findBestEmployee(employees));
  //    #4

const income = {
  worker1: 17234,
  worker2: 15432,
  worker3: 21123,
  worker4:38532,
  worker5:12457,
}
const {worker1, worker2, worker3, worker4, worker5} = income;

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
