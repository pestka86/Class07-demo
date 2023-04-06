const hours = ["6am", "7am", "8am","9am", "10am", "11am", "12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am"];

const tableElement = document.getElementById("sales-table");

const state = {
    allCookieStands: [],
};

function CookieStand(location, minCustPerHour, maxCustPerHour, avgCookiePerSale){
    this.locationName = locationName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiePerSale = avgCookiePerSale;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailySales = 0;
}

CookieStand.prototype.calcCookieEachHour = function () {
    for (i = 0; i < hours.length; i++ ) {
        const oneHour = this.customersEacgHour.push(random(this.minCustPerHour, this.MaxCustPerHour)
        );
    }
};

CookieStand.prototype.calcCookiesEacgHour = function () {
    
}