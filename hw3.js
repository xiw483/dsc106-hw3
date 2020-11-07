const KNIFE_PRICE = 6.25;
const FORK_PRICE = 4.99;
const ZERO_FORMAT = '0.00';

var num_sales = 0;
var num_knife = 0; 
var num_fork = 0;

var table = document.getElementById('order_tbl').getElementsByTagName('tbody')[0];

let store = {
    orderHistory: []
};

let initialize = 1;
function generateEntries() {
	// Returns an orderHistory array
	// [ID#, Date, Knife quantity, Fork quantity]
	return [
	  [1, '10/19/2020', 1, 2, 'Paypal'], 
	  [2, '10/20/2020', 3, 3, 'Visa']
	]
}

var first_two = generateEntries();

function tot_price(arr) {
    return (arr[2]*KNIFE_PRICE + arr[3]*FORK_PRICE)
}


function insert_data(data) {
    var sales = tot_price(data);
    data.splice(4, 0, "$"+sales);

    num_sales += sales;
    num_knife += data[2];
    num_fork += data[3];
    document.getElementById("num_sales").innerHTML = num_sales;
    document.getElementById("num_knife").innerHTML = num_knife;
    document.getElementById("num_fork").innerHTML = num_fork;

    var tr = table.insertRow()
    for (let i=0; i<data.length; i++) {
        var cell = tr.insertCell(i);
        cell.innerHTML = data[i];
    }
}

for (let d of first_two) {
    insert_data(d)
}

