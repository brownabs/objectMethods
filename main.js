const outputCarElement = document.querySelector("#carOutput")
const firstCar = allCars[0]


outputCarElement.innerHTML += "<h1>Car List</h1>"

allCars.forEach(car => {  //iterates over the array of objects
    outputCarElement.innerHTML += "<hr/>" //puts a break between those objects

    for (const entry of Object.entries(car)) { //for loop that collects the keys and the values of an object array
        outputCarElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>` //outputs those objects onto the DOM
    }
})

// You will need to start off by iterating the array of sales with a forEach() method. 
// Then iterate the entries of the vehicle property of each sale.
const outputSalesByWeek = document.querySelector("#salesByWeekOutput")

outputSalesByWeek.innerHTML += "<h1>Sales By Week</h1>"

salesByWeek.forEach(sale => {
    outputSalesByWeek.innerHTML += "<hr/>"
    for (const entry of Object.entries(sale.vehicle)) {
        outputSalesByWeek.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})



// Randall has come back with a new job for you. Each week, he wants to see a report of 
// how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// Display the first and last name of the sales agent.
// Display all keys and values for the car sold.
// Display the gross profit made on the sale.



const salesAgentOutput = document.querySelector("#salesAgentOutput")

salesAgentOutput.innerHTML += "<h1>Sales Agents</h1>"

salesByWeek.forEach(sale => {
    salesAgentOutput.innerHTML += "<hr/>"

    salesAgentOutput.innerHTML += `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`

    for (const entry of Object.entries(sale.vehicle)) {
        salesAgentOutput.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }

    salesAgentOutput.innerHTML += `<h4>Profit: $${sale.gross_profit}</h4>`

})


// // Your first task is to use object methods to match the value of all properties of 
// // the sales_agent object in each sale against the input from Randall. Put an input field in your DOM, 
// // // attach a keypress event listener to it, and search when Randall presses enter. 


const searchInput = document.querySelector("#searchInput")
const searchOutput = document.querySelector("#searchOutput")

searchInput.addEventListener("keypress", event => {
    if (event.charCode === 13) {
        const searchTerm = event.target.value
        searchOutput.innerHTML = ""
        salesByWeek.forEach(sale => {
            for (const value of Object.values(sale.sales_agent)) {
                if (value.toUpperCase().includes(searchTerm.toUpperCase())) {
                    let firstName = sale.sales_agent.first_name
                    let lastName = sale.sales_agent.last_name
                    searchOutput.innerHTML += `<h1>${firstName} ${lastName}<h1>`

                    for (const entry of Object.entries(sale.vehicle)) {
                        searchOutput.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
                    }

                    searchOutput.innerHTML += `<h4>Profit: $${sale.gross_profit}</h4><hr/>`
                }

            }
        });
    }
})


