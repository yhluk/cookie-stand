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
  this.cookieSales = [];
  this.total = 0;
}


let seattle = new City ('Seattle', 23, 65, 6.3);
let tokyo = new City ('Tokyo', 3, 25, 1.2);
let dubai = new City ('Dubai', 11, 38, 3.7);
let paris = new City ('Paris', 20, 38, 2.3);
let lima = new City ('Lima', 2, 16, 4.6);

cityArray.push(seattle, tokyo, dubai, paris, lima);


// * * * * * * * PROTOTYPE METHODS * * * * * * * * * * . * 8* 8* 8

City.prototype.cookieSales = function(){
  for(let i=0; i < hours.length; i++){
    let cookieNeeded = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer)) * this.avgCookieSale;
    this.cookiesSale.push(cookieNeeded);
    this.total = this.total + cookieNeeded;
  }
};

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
City.prototype.render = function () 
{
  let ul = document.createElement('ul');
  storeSales.appendChild(ul);
  ul.innerText = `${this.name}`;

  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('td');
    ul.appendChild(td);
    td.innerText = `${hours[i]}: ${Math.floor(this.cookiesSale[i])}`;
  }
  let td = document.createElement('td');
  ul.appendChild(td);
  td.innerText = `Total: ${Math.floor(this.total)}`;
  // }
};





function renderAll() {
  for (let i = 0; i < cityArray.length; i++){
    cityArray[i].cookieSales();
    cityArray[i].render();
  }
}

renderAll();




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