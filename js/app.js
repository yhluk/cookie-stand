'use strict'

// ******GLOBALS******

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ******HELPER FUNCTIONS / UTILITIES******


function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
};




