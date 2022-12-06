'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randCookies(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeSales = document.getElementById('store-sales');
console.dir(storeSales);

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSales: 6.3,
  getCookiesSALES: function(){
    let custPerH = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    let total
  }
};

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSales: 1.2,
  cookiesBought: [], 
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSales: 3.7,
  cookiesBought: [], 
};


let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSales: 2.3,
  cookiesBought: [], 
};


let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSales: 4.6,
  cookiesBought: [], 
};

seattle.getCookiesBought();
seattle.render();
tokyo.getCookiesBought();
tokyo.render();
dubai.getCookiesBought();
dubai.render();
paris.getCookiesBought();
paris.render();
lima.getCookiesBought();
lima.render();