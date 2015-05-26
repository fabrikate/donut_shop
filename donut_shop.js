var hoursOperation = 11
//Create a constructer function to house 4 location specifics.
var StoreLocation = function(locationName, minCustomers, maxCustomers, avgDonutPerCustomer){
	this.locationName = locationName;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonutPerCustomer = avgDonutPerCustomer;
	this.randomCustomerPerHour = function(minCustomers,maxCustomers){
			return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers)
		}
	this.calculateDonutPerHour = function(){
		return Math.floor(this.randomCustomerPerHour() * this.avgDonutPerCustomer + 1);
	}
	this.calculateDonutPerDay = function(){
		return (this.randomCustomerPerHour() * this.avgDonutPerCustomer) * hoursOperation;
	}
}

objectArray = [];
// Add metrics and location to construction function
objectArray.push(new StoreLocation("Downtown", 8, 43, 4.5));
objectArray.push(new StoreLocation("Capitol Hill", 4, 37, 2));
objectArray.push(new StoreLocation("South Lake Union", 9, 23, 6.33));
objectArray.push(new StoreLocation("Wedgewood", 2, 28, 1.25));
objectArray.push(new StoreLocation("Ballard", 8, 58, 3.75));

StoreLocation.prototype.calculateTableHours = function(){
	var tablePosition = document.getElementById('topPotMetrics');
	var totalRead = 0;
	var newTr = document.createElement('tr');

	var newTh = document.createElement('th');
	newTh.textContent = this.locationName;
	newTr.appendChild(newTh);

	for(i=0; i<hoursOperation; i++){
		var hourlyRead = this.calculateDonutPerHour();
		totalRead += hourlyRead

		var newTd = document.createElement('td');
		newTd.textContent = hourlyRead;
		newTr.appendChild(newTd);
	}

	var newTd = document.createElement('td');
	newTd.textContent = totalRead;
	newTr.appendChild(newTd);
	tablePosition.appendChild(newTr);
}
//Runs calculations for table
objectArray.forEach(function(item, index) {
	item.calculateTableHours();
});

//take input from user and assign it to a value
var render = function(){
	var getNameInput, getMinInput, getMaxInput, getAvgDonutInput;
	getNameInput = document.getElementById('storeLocationInput');
	getMinInput = document.getElementById('storeMinCustomersInput');
	getMaxInput = document.getElementById('storeMaxCustomersInput');
	getAvgDonutInput = document.getElementById('storeAvgDonutPerCustomerInput');

	var n = getNameInput.value;
	var min = getMinInput.value;
	var max = getMaxInput.value;
	var avg = getAvgDonutInput.value;

	var newObjectToArray = new StoreLocation(n, min, max, avg);
	objectArray.push(newObjectToArray);
	newObjectToArray.calculateTableHours();

}

var getButton = document.getElementById('workButton');
getButton.addEventListener('click', render, false);

//Thanks to Colin, Tristan and Marcel for their help!
