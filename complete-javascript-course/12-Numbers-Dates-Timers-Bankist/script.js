'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2025-04-30T18:49:59.371Z',
        '2025-05-01T12:01:20.894Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2025-04-30T18:49:59.371Z',
    '2025-05-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)))

  const daysPassed = calcDaysPassed(new Date(), date)

  if(daysPassed === 0) return `Today`
  if(daysPassed === 1) return `Yesterday`
  if(daysPassed <= 7) return `${daysPassed} days ago` 

  // const day = `${date.getDate()}`.padStart(2, 0)
  // const month = `${date.getMonth() + 1}`.padStart(2, 0)
  // const year = date.getFullYear()

  // return `${day}/${month}/${year}`
  return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = (value, local, cur) => {
  return new Intl.NumberFormat(local, {
      style: 'currency',
      currency: cur,
  }).format(value)
}

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = account.movements.map((mov, i) => ({ movement: mov, movementDate: account.movementsDates.at(i) }))

  if(sort) combinedMovsDates.sort((a,b) => a.movement - b.movement)

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate)
    const displayDate = formatMovementDate(date, account.locale)


    const formattedMov = formatCur(movement, account.locale, account.currency)

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency)
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency)

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function() {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2,0)
    const sec = String(time % 60).padStart(2,0)
    labelTimer.textContent = `${min}:${sec}`
    
    if(time === 0) {
      clearInterval(timer)
      containerApp.style.opacity = 0
      labelWelcome.textContent = 'Log in to get started'
    }

    time--
  }

  let time = 100

  tick()
  const timer = setInterval(tick, 1000)
  return timer
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date()
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        // weekday: 'long',
    }
    const locale = currentAccount.locale

    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    if(timer) clearInterval(timer)

    timer = startLogOutTimer()

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfare date
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);

    clearInterval(timer)
    timer = startLogOutTimer()
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
        // Add movement
        currentAccount.movements.push(amount)

        currentAccount.movementsDates.push(new Date().toISOString())

        // Update UI
        updateUI(currentAccount)
    }, 2000)
  }
  inputLoanAmount.value = '';

  clearInterval(timer)
  timer = startLogOutTimer()
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0)
// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 === 0.3)

// console.log(Number('23'))
// console.log(+'23')

// console.log(Number.parseInt('30px', 10))
// console.log(Number.parseInt('e30', 10))
// console.log(Number.parseFloat('30.45px', 10))

// console.log(Number.isNaN(20))
// console.log(Number.isNaN('fjkgdj'))
// console.log(Number.isNaN(+'fjkgdj'))
// console.log(Number.isNaN(20 / 0))
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))

// console.log(Math.sqrt(25))
// console.log(25 ** (1/2))
// console.log(8 ** (1/3))

// console.log(Math.max(5,18,25,11,2))
// console.log(Math.min(5,18,25,11,2))

// console.log(Math.PI * Number.parseFloat('10px') ** 2)

// console.log(Math.trunc(Math.random() * 6) + 1)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomInt(10, 20))
// console.log(randomInt(1, 3))

// console.log(Math.trunc(23.3))

// console.log(Math.round(23.3))
// console.log(Math.round(23.9))

// console.log(Math.ceil(23.3))
// console.log(Math.ceil(23.9))

// console.log(Math.floor(23.3))
// console.log(Math.floor(23.9))

// console.log(Math.trunc(-23.3))
// console.log(Math.floor(-23.3))

// console.log(+(2.7).toFixed(0))
// console.log(+(2.7).toFixed(3))

// console.log(5 % 2)
// console.log(5 / 2)
// console.log(8 % 3)
// console.log(8 / 3)

// console.log(6 % 2)
// console.log(7 % 2)

// const isEven = n => n%2 === 0
// console.log(isEven(8))
// console.log(isEven(23))
// console.log(isEven(514))

// labelBalance.addEventListener('click', () => {
//   document.querySelectorAll('.movements__row').forEach((row, i) => {
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered' 
//       if (i % 3 === 0) row.style.backgroundColor = 'blue' 
//   })
// })

// const diameter = 24873264386
// const priceCents = 345_99
// console.log(priceCents)

// const transferFee = 15_00_00

// const PI = 3.14_15
// console.log(PI)

// console.log(Number('230_000'))
// console.log(parseInt('230000'))

// console.log(2**53 - 1)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(2**53 + 1)
// console.log(2**53 + 2)
// console.log(2**53 + 3)

// console.log(56348364875638345685734658365647365847n)
// console.log(BigInt(5743857349854379853798547598378))

// console.log(10000n + 10000n)

// const huge = 204238375893475985379534n;
// const num = 23
// console.log(huge * num)

// console.log(20n > 15)

// console.log(20n === 20)
// console.log(typeof 20n)
// console.log(20n == 20)

// console.log(huge + ' is REALLY big!!!')

// console.log(10n / 3n)
// console.log(10 / 3)

// const now = new Date()
// console.log(now)
// console.log(new Date('December 24, 2025'))
// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(2037,10,19,15,23,5))
// console.log(new Date(2037, 10, 31))

// console.log(new Date(0))
// console.log(new Date(3*24*60*60*1000))

// const future = new Date(2037,10,19,15,23,5)
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getDate())

// console.log(Date.now())

// future.setFullYear(2040)
// console.log(future)

// const future = new Date(2037, 10, 19, 15, 23)
// console.log(+future)

// const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4, 10,8))
// console.log(days1)

// const num = 545353.23

// const options = {
//   style: 'unit',
//   unit: 'mile-per-hour',
//   currency: 'EUR',
//   // useGrooping: false
// }

// console.log(`US: `, new Intl.NumberFormat('en-US', options).format(num))
// console.log(`Germany: `, new Intl.NumberFormat('de-DE', options).format(num))
// console.log(`Syria: `, new Intl.NumberFormat('ar-SY', options).format(num))
// console.log(`Browser: `, new Intl.NumberFormat(navigator.language, options).format(num))

// const ings = ['olives', 'spinach']

// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza ${ing1} and ${ing2}`), 3000, ...ings)
// console.log('Waiting...')
// if(ings.includes('spinach')) clearTimeout(pizzaTimer)

// setInterval(() => {
//   const now = new Date()
//   console.log(now)
// },1000)