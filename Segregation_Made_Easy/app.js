d3.csv("sample.csv").then(function (data) {
    var sample = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);


    // Defining the function
function runEnter() {

    // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
    d3.select("tbody").html("") 
    
    // This code is needed to prevent the page from reloading.
    d3.event.preventDefault();

    // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
    var inputValue = d3.select("#user-input").property("value");

    // This loop will loop through the first column of the csv file (i.e. waste), if it matches the element it will assign the values accordingly 
    for (index=0; index < sample.length; index++){

        if (sample[index][" waste "] == inputValue){
            
            
            console.log(String(sample[index][" waste "]));
            var waste = String(sample[index][" waste "]);
            var category = String(sample[index]["category"]);
            break;
        }

    }

    //Inserts the html code in the tbody
    d3.select("tbody").insert("tr").html(
        "<tr style='height: 75px;'>" +
        "<td class='u-border-1 u-border-white u-first-column u-grey-5 u-table-cell u-table-cell-3'>" + (waste) +"</a>"+"</td>" + 
        "<td class='u-border-1 u-border-white u-grey-5 u-table-cell u-table-cell-4'>" + (category)+"</td>" ) 
    
    };
    });
