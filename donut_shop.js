var hoursOperation = 11
//Create a constructer function to house 4 location specifics.
var storeLocation = function(locationName, minCustomers, maxCustomers, avgDonutPerCustomer){
	this.locationName = locationName;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonutPerCustomer = avgDonutPerCustomer;
	this.randomCustomerPerHour = function(minCustomers,maxCustomers){
			return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1) + this.minCustomers)
		}
	this.calculateDonutPerHour = function(){
		return (this.randomCustomerPerHour() * this.avgDonutPerCustomer);
	}
	this.calculateDonutPerDay = function(){
		return (this.randomCustomerPerHour() * this.avgDonutPerCustomer) * hoursOperation;
	}
}
// Add metrics and location to construction function
downtown = new storeLocation("downtown", 8, 43, 4.5);
capitolHill = new storeLocation("capitolHill", 4, 37, 2);
southLakeUnion = new storeLocation("southLakeUnion", 9, 23, 6.33);
wedgewood = new storeLocation("wedgewood", 2, 28, 1.25);
ballard = new storeLocation("ballard", 8, 58, 3.75);

calculateTableHours = function(storeLocation){
	var rowPosition = document.getElementById(storeLocation.locationName);
	var totalRead = 0
	for(i=0; i<hoursOperation; i++){
		var hourlyRead = storeLocation.calculateDonutPerHour()
		totalRead += hourlyRead

		var newTd = document.createElement('td');
		newTd.textContent = hourlyRead;
		rowPosition.appendChild(newTd);
//copy table and use calculatedonutperday
	}

	var newTd = document.createElement('td');
	newTd.textContent = totalRead;
	rowPosition.appendChild(newTd);
}

calculateTableHours(downtown);
calculateTableHours(capitolHill);
calculateTableHours(southLakeUnion);
calculateTableHours(wedgewood);
calculateTableHours(ballard);

//Thanks to Colin for assistance with my for loop and table.
