'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeSales = document.getElementById('store-sales');

let cityArray = [];


// * * * * * * * * * CONSTRUCTOR FUNCTION * * * * * * * * * * * * *

function City(name, minCustomer, maxCustomer, avgCookieSale){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.cookieSold = [];
  this.total = 0;
}


let seattle = new City ('Seattle', 23, 65, 6.3);
let tokyo = new City ('Tokyo', 3, 25, 1.2);
let dubai = new City ('Dubai', 11, 38, 3.7);
let paris = new City ('Paris', 20, 38, 2.3);
let lima = new City ('Lima', 2, 16, 4.6);

// * * * * * * * PROTOTYPE METHODS * * * * * * * * * * . * 8* 8* 8

// City.prototype.cookieSold = function(){
//   for(let i=0; i < hours.length; i++){
//     let cookieNeeded = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer)) * this.avgCookieSale;
//     this.cookiesSold.push(cookieNeeded);
//     this.total = this.total + cookieNeeded;
//   }
// };
City.prototype.customerPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};


City.prototype.generateCookieSold = function(){
  for(let i=0; i < hours.length; i++){
    const cookies = Math.floor(this.customerPerHour() * this.avgCookieSale);
    this.cookieSold.push(cookies);
    this.total += cookies;
  }
}

//***********Renderr*************** */

function header(){ /*****stand alone function */

  let tr = document.createElement('tr');
  storeSales.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'City';
  tr.appendChild(th);

  for(let i = 0; i<hours.length; i++){
  th = document.createElement('th');
  th.textContent = hours[i];
  tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'total';
  tr.appendChild(th);
}

header();


City.prototype.render = function () {
  let tr = document.createElement('tr');
  storeSales.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = this.cookieSold[i];
    tr.appendChild(td);
  }

  // append total 
  let total = 0;
  for (let i = 0; i < this.cookieSold.length; i++) {
    total += this.cookieSold[i];
  }
  let totalTd = document.createElement('td');
  totalTd.textContent = total;
  tr.appendChild(totalTd);
};


cityArray.push(seattle, tokyo, dubai, paris, lima);
let totalTr = document.createElement('tr');
storeSales.appendChild(totalTr);

for (const i in cityArray) {
  let city = cityArray[i]
  city.generateCookieSold();
  city.render();
}


console.log(cityArray);





  // let ul = document.createElement('ul');
  // storeSales.appendChild(ul);
  // ul.innerText = `${this.name}`;

  // for (let i = 0; i < hours.length; i++) {
  //   let li = document.createElement('td');
  //   ul.appendChild(td);
  //   td.innerText = `${hours[i]}: ${Math.floor(this.cookiesSale[i])}`;
  // }
  // let td = document.createElement('td');
  // ul.appendChild(td);
  // td.innerText = `Total: ${Math.floor(this.total)}`;






// let seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cookiesSale: [],
//   total: 0,
//   customerPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   cookieSales: function(){
//     for(let i=0; i < hours.length; i++){
//       let cookieNeeded = this.customerPerHour() * this.avgCookieSale;
//       this.cookiesSale.push(cookieNeeded);
//       this.total = this.total + cookieNeeded;
//     }
//   },




// let tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSales: 1.2,
//   cookiesSale: [],
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSales: 3.7,
//   cookiesSale: [],
// };


// let paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSales: 2.3,
//   cookiesSale: [],
// };


// let lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSales: 4.6,
//   cookiesSale: [],