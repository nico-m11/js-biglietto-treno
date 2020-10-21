





//if (!isNaN(km) && !isNaN(age)) {

//if (age <= 18) {
//  price = km * unitPrice * 0.8;
  //console.log(price);
//} else if (age >= 65) {
//  price = km * unitPrice * 0.6;
//  console.log(price);
//} else {
//  price = km * unitPrice;
//  console.log(price);
// }
//}

//document.getElementById("risult").innerHTML = ("Il costo del tuo boglietto Treno è di €: " + price.toFixed(2));

var btnG = document.getElementById('btnG');

btnG.addEventListener("click", function () {
  var nome = document.getElementById("name").value;
  var distanza = document.getElementById("km").value;
  var ageDiscount = document.getElementById("ageDiscount").value;
  var unitPrice = 0.21;
  var price = 0;





 if (!isNaN(km) && !isNaN(age)) {

  if (optionOne) {
    price = km * unitPrice * 0.8;
    price = price;
    console.log(price);
} else if (optionTwo) {
     price = km * unitPrice * 0.6;
     price = price;
    console.log(price);
} else  {
     price = km * unitPrice;
     price = price;
    console.log(price);
}
}
document.getElementById("nomeCognome").innerHTML = nome;
document.getElementById("offerta").innerHTML =  ageDiscount;
document.getElementById("randomDue").innerHTML = Math.floor(Math.random() * 10);
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100);
document.getElementById("total").innerHTML = "€" + price;
})
