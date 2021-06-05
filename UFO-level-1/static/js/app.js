// from data.js
var tableData = data;

// Set variable for table body reference
var tbody = d3.select("tbody");

// Table formatted and populated with data
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Set variable for button reference
var button = d3.select("#filter-btn");

// Set variable for form reference
var form = d3.select("#form")

// Create event handlers for button and pressing enter key
button.on("click",ufoFilter);
form.on("submit",ufoFilter);

//Create event handler function
function ufoFilter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
