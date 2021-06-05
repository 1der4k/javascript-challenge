// from data.js
var tableData = data;

// Set variable for table body reference
var tbody = d3.select("tbody");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});