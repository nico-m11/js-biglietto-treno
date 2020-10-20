var km = parseInt(prompt("Quanti Km percorriamo?"));

var age = parseInt(prompt("Quanti anni hai?"));

var unitPrice = 0.21;



if (!isNaN(km) && !isNaN(age)) {

if (age <= 18) {
  price = km * unitPrice * 0.8;
  console.log(price);
} else if (age >= 65) {
  price = km * unitPrice * 0.6;
  console.log(price);
} else {
  price = km * unitPrice;
  console.log(price);
 }
}

document.getElementById("risult").innerHTML = ("Il costo del tuo boglietto Treno è di €: " + price.toFixed(2));
