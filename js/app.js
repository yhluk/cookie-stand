'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeSales = document.getElementById('store-sales');

let cityArray = [];


// ************** CONSTRUCTOR FUNCTION *************

function City(name, minCustomer, maxCustomer, avgCookieSell){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSell = avgCookieSell;
  this.cookieSales = [];
  this.total = 0;
}

// ******* PROTOTYPE METHODS *********

City.prototype.cookieSales = function(){
  for(let i=0; i < hours.length; i++){
    let cookieNeeded = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer)) * this.avgCookieSell;
    this.cookiesSell.push(cookieNeeded);
    this.total = this.total + cookieNeeded;
  }
};

// let seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSell: 6.3,
//   cookiesSell: [],
//   total: 0,
//   customerPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   cookieSales: function(){
//     for(let i=0; i < hours.length; i++){
//       let cookieNeeded = this.customerPerHour() * this.avgCookieSell;
//       this.cookiesSell.push(cookieNeeded);
//       this.total = this.total + cookieNeeded;
//     }
//   },
City.prototype.render = function () {

let tableElement = document.createElement('table');
storeSales.appendChild(tableElement);

let row = document.createElement('tr');
  tableElem.appendChild(row);



};
  let ul = document.createElement('ul');
  storeSales.appendChild(ul);
  ul.innerText = `${this.name}`;

  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `${hours[i]}: ${Math.floor(this.cookiesSell[i])}`;
  }
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = `Total: ${Math.floor(this.total)}`;
  // }
}




// ******** Executable code *********

let seattle = new City ('Seattle', 23, 65, 6.3);
let tokyo = new City ('Tokyo', 3, 25, 1.2);
let dubai = new City ('Dubai', 11, 38, 3.7);
let paris = new City ('Paris', 20, 38, 2.3);
let lima = new City ('Lima', 2, 16, 4.6);

cityArray.push(seattle, tokyo, dubai, paris, lima);

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
//   cookiesSell: [],
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSales: 3.7,
//   cookiesSell: [],
// };


// let paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSales: 2.3,
//   cookiesSell: [],
// };


// let lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSales: 4.6,
//   cookiesSell: [],