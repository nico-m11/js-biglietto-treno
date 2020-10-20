var km = parseInt(prompt("Quanti Km percorriamo?"));

var age = parseInt(prompt("Qaunti anni hai?"));

var price = 0.21;

if (!isNaN(km) && !isNaN(age)) {

if (age <= 18) {
  price = km * 0.8;
  console.log(price);
} else if (age >= 65) {
  price = km * 0.6;
  console.log(price);
} else {
  price = km * 0.21;
  console.log(price);
 }
}

document.getElementById("risult").innerHTML = ("Il costo del tuo boglietto Treno è di €: " + price);
