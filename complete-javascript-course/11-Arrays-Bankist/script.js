'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium'
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    type: 'standard',
}

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    type: 'premium',
}

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    type: 'basic',
}

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = ''

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}$</div>
      </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const calcPrintBalance = account => {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0)
    labelBalance.textContent = `${account.balance}$`
}

const calcDisplaySummary = account => {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}$`
  
  const outcomes = account.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov)
  labelSumOut.textContent = `${Math.abs(outcomes)}$`

  const interest = account.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * account.interestRate) / 100)
      .filter((int, i, array) => int > 1)
      .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}$`
}

const createUsernames = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(letter => letter[0])
        .join('')
  })
}

createUsernames(accounts)

const updateUI = acc => {
  displayMovements(acc.movements)
  calcPrintBalance(acc)
  calcDisplaySummary(acc)
}

let currentAccount

btnLogin.addEventListener('click', e => {
  e.preventDefault()
  
  currentAccount = accounts.find(account => account.username === inputLoginUsername.value)

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount)

  }
})

btnTransfer.addEventListener('click', e => {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiveAcc = accounts.find(account => account.username === inputTransferTo.value)

  inputTransferAmount.value = inputTransferTo.value = ''
  inputTransferTo.blur()

  if(amount > 0 && currentAccount.balance >= amount && receiveAcc && receiveAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount)
    receiveAcc.movements.push(amount)

    updateUI(currentAccount)
  }
})

btnLoan.addEventListener('click', e => {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount)

    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
  inputLoanAmount.blur()
})

btnClose.addEventListener('click', e => {
  e.preventDefault()
  
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
    const index = accounts.findIndex(account => account.username === currentAccount.username)
    accounts.splice(index, 1);
    
    containerApp.style.opacity = 0
  }

  inputCloseUsername.value = inputClosePin.value = ''
})

let sorted = false
btnSort.addEventListener('click', e => {
  e.preventDefault()
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = [ 'a', 'b', 'c', 'd', 'e' ]
// Slice
// console.log(arr.slice(2))
// console.log(arr.slice(2,4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1, -2))

// Splice
// console.log(arr.splice(2))
// arr.splice(-1)
// arr.splice(1,2)
// console.log(arr)

// const arr2 = ['j', 'i', 'h', 'g', 'f']
// // console.log(arr2.reverse())
// // console.log(arr2)

// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr, ...arr2])

// // Join
// console.log(letters.join(' - '))

// const arr = [23, 11, 64]
// console.log(arr[0])
// console.log(arr.at(0))

// console.log(arr[arr.length -1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))
// console.log('olha'.at(0))
// console.log('olha'.at(-1))

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// for(const movement of movements) {
//   movement > 0 ? console.log(movement) : console.log(Math.abs(movement))
// }

// movements.forEach((movement, index) => {
//   movement > 0 ? console.log(`${index} ${movement}`) : console.log(`${index} ${Math.abs(movement)}`)
// })

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ])

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`)
// })

// const currenciesUnique = new Set(['USD', 'GBR', 'USD', 'EUR', 'EUR'])
// console.log(currenciesUnique)

// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${key}: ${value}`)
// })

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1
// const movementsUsd = movements.map(movement => movement * eurToUsd)
// console.log(movementsUsd)
// console.log(movements)

// const movementsUSDfor = []
// for(const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd)
// }
// console.log(movementsUSDfor)

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if(mov > 0) {
//     return `Movenet ${i + 1}: You deposited ${mov}`
//   } else {
//     return `Movenet ${i + 1}: You withdrew ${Math.abs(mov)}`
//   }
// })
// console.log(movementsDescriptions)

// const movementsDescriptions = movements.map((mov, i) => `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`)
// console.log(movementsDescriptions)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(mov => mov > 0)
// console.log(deposits)

// const depositsFor = []
// for(const mov of movements) if (mov > 0) depositsFor.push(mov)
// console.log(depositsFor)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals) 

// console.log(movements)
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0 )
// console.log(balance)

// let balance2 = 0
// for(const mov of movements) balance2 += mov
// console.log(balance)

// const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0])
// console.log(max)

// const eurToUsd = 1.1
// const totalDepositUsd = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositUsd)

// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(firstWithdrawal)

// console.log(accounts)
// const account = accounts.find(account => account.owner === 'Jessica Davis')
// console.log(account)

// for(const account of accounts) {
//   account.owner === 'Jessica Davis' && console.log(account) 
// }

// console.log(movements)
// const lastWithdrawal = movements.findLast(mov => mov < 0)
// console.log(lastWithdrawal)

// const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000)
// console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`)

// console.log(movements)
// console.log(movements.includes(-130))
// console.log(movements.some(mov => mov === -130))

// const anyDeposits = movements.some(mov => mov > 5000)
// console.log(anyDeposits)

// console.log(movements.every(mov => mov > 0))
// console.log(account4.movements.every(mov => mov > 0))

// const deposit = mov => mov > 0
// console.log(movements.some(deposit))

// const arr = [[1,2,3], [4,5,6], 7,8]
// console.log(arr.flat())

// const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8]
// console.log(arrDeep.flat(2))

// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements)
// const allMovements = accountMovements.flat()
// console.log(allMovements)
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalance)

// const overalBalance2 = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalance2)

// const overalBalance3 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0)
// console.log(overalBalance3)

// const owners = ['Olha', 'Adam', 'Martha']
// console.log(owners.sort())
// console.log(owners)

// console.log(movements)
// // console.log(movements.sort())
// movements.sort((a,b) => a - b)
// console.log(movements)
// movements.sort((a,b) => b - a)
// console.log(movements)

// console.log(movements)

// const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawals')
// console.log(groupedMovements)

// const groupsByActivity = Object.groupBy(accounts, account => {
//   const movementsCount = account.movements.length
//   if(movementsCount >= 8) return 'very active'
//   if(movementsCount >= 4) return 'active'
//   if(movementsCount >= 1) return 'moderate'
//   return 'inactive'
// })

// console.log(groupsByActivity)

// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type)
// console.log(groupedAccounts)

// console.log([1,2,3,4,5,6,7])
// console.log(new Array(1,2,3,4,5,6,7))

// const x = new Array(7)
// console.log(x)
// console.log(x.map(() => 5))
// // x.fill(1)
// x.fill(1,3,5)
// console.log(x)

// const arr = [1, 2, 3, 4, 5, 6, 7]
// arr.fill(23,2,6)
// console.log(arr)

// const y = Array.from({length: 7}, () => 1)
// console.log(y)

// const z = Array.from({length: 7}, (cur, i) => i + 1)
// console.log(z)

// const rand = Array.from({length: 100}, cur => Math.floor(Math.random() * 100))
// console.log(rand)


// labelBalance.addEventListener('click', () => {
//   const movementsDOM = Array.from(document.querySelectorAll('.movements__value'))
//   console.log(movementsDOM.map(mov => mov.textContent.replace('$', '')))
// })

// console.log(movements)
// const reversedMovs = movements.slice().reverse()
// console.log(reversedMovs)
// console.log(movements)

// console.log(movements)
// // movements[1] = 2000
// const newMovements = movements.with(1, 2000)
// console.log(newMovements)
// console.log(movements)

const bankDepositsSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((mov, cur) => mov + cur, 0)
// console.log(bankDepositsSum)

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).length
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur > 1000 ? count + 1 : count, 0)
// console.log(numDeposits1000)

const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposit += cur : sums.withdrawal += cur
  sums[cur > 0 ? 'deposit' : 'withdrawal'] += cur
  return sums
}, {deposit: 0, withdrawal: 0})
// console.log(sums)

const convertTitleCase = function(title) {
  const exceptions = ['a', 'an', 'but', 'for', 'on']
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')

  return titleCase
}
// console.log(convertTitleCase('this is a nice title'))
// console.log(convertTitleCase('this is a nice LONG title but not too long'))