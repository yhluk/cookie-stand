'use strict';

//*****DOM WINDOWS */
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeSales = document.getElementById('store-sales');
let newCityForm = document.getElementById('newCityAdd');
let cityArray = [];


// * * * * * * * * * CONSTRUCTOR FUNCTION * * * * * * * * * * * * *


function City(name, minCustomer, maxCustomer, avgCookieSale)
{
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.cookieSold = [];
  this.total = 0;
  this.totalTotal = 0;
}

let seattle = new City ('Seattle', 23, 65, 6.3);
let tokyo = new City ('Tokyo', 3, 25, 1.2);
let dubai = new City ('Dubai', 11, 38, 3.7);
let paris = new City ('Paris', 20, 38, 2.3);
let lima = new City ('Lima', 2, 16, 4.6);


cityArray.push(seattle, tokyo, dubai, paris, lima);



// * * * * * * * PROTOTYPE METHODS * * * * * * * * * ** * * * * ** * * * * ** * * * * ** * * * * *


City.prototype.customerPerHour = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};


City.prototype.generateCookieSold = function(){
  for(let i=0; i < hours.length; i++){
    const cookies = Math.floor(this.customerPerHour() * this.avgCookieSale);
    this.cookieSold.push(cookies);
    // this.cookieSold.push[totalCookiesPerHour];
    this.total += cookies;
  }
};

//***********Renderr*************** */*********** */*********** */*****/*/*/*/*/*/**/*/*/*/*/*/*

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

  // ************* apppend total per city************************************************************

  let total = 0;
  for (let i = 0; i < this.cookieSold.length; i++) 
  {
    total += this.cookieSold[i];
  }

  this.totalTotal += total;


  let totalTd = document.createElement('td');
  totalTd.textContent = total;
  tr.appendChild(totalTd);
};
let totalTr = document.createElement('tr');
storeSales.appendChild(totalTr);

for (const i in cityArray) {
  let city = cityArray[i];
  city.generateCookieSold();
  city.render();
}
//*******footer total for table ***************************************************************/




function tableFooter(){
  let footerTr = document.createElement('tr');
  storeSales.appendChild(footerTr);

  let footerTh = document.createElement('th');
  footerTh.textContent = 'Total P/H';
  footerTr.appendChild(footerTh);

  const totalPerHourArray = [];

  for (let i = 0; i < hours.length; i++) 
  {
    let hourTotal = 0;
    for (let j = 0; j < cityArray.length; j++)
    {
      hourTotal += cityArray[j].cookieSold[i];
    }
    totalPerHourArray.push(hourTotal);
  }

  for (let i = 0; i < totalPerHourArray.length; i++) {
    let footerTh = document.createElement('th');
    footerTh.textContent = totalPerHourArray[i];
    footerTr.appendChild(footerTh);
  }

  let totalTotalFinal = 0;

  for (let i = 0; i < cityArray.length; i++)
  {
    totalTotalFinal += cityArray[i].totalTotal;
  }

  footerTh = document.createElement('th');
  footerTh.textContent = totalTotalFinal;
  footerTr.appendChild(footerTh);
}



//******adding event handler */*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/*/

function handleSubmit(event){
  event.preventDefault();

  //*******getting info coming from the form */

  let addCity = event.target.addCity.value;
  let addCityMin = event.target.addCityMin.value;
  let addCityMax = event.target.addCityMax.value;
  let addCityAvg = event.target.addCityAvg.value;
  

  let newCity = new City(addCity, addCityMin, addCityMax, addCityAvg);

  cityArray.push(newCity);


  //********************calling for new city */*/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*/*/**/*/*/*/*
  storeSales.deleteRow(-1);
  newCity.generateCookieSold();
  newCity.render();

  tableFooter();

  newCityForm.reset();

}
tableFooter();



newCityForm.addEventListener('submit', handleSubmit);


