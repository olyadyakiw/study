const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value = 10000

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200

const getLimit = (user, limits) => limits?.[user] ?? 0

const addExpence = function (state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

 return value <= getLimit(cleanUser, limits) ? [...state, { value: -value, description, user: cleanUser }] : state
};
const newBudget1 = addExpence(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpence(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpence(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpences = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry
  })
};
const finalBudget = checkExpences(newBudget3, spendingLimits);
console.log(finalBudget)

const logBigExpenses = function (state, bigLimit) {
  // const bigExpences = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join(' / ')
  const bigExpences = state
    .filter(entry => entry.value <= - bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ')
  
  console.log(bigExpences)
  // let output = '';
  // for (const entry of budget) 
  //   output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output)
};
logBigExpenses(finalBudget, 1000)

