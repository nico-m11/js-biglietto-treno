





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
  var km = document.getElementById("kM").value;
  console.log(km);
  var ageDiscount = document.getElementById("ageDiscount").value;
  console.log(ageDiscount);
  var unitPrice = 0.21;
  var price;





 //if (!isNaN(km) && !isNaN(ageDiscount)) {
  if (ageDiscount === "minorenne") {
    price = (km * unitPrice * 0.8);
    console.log(price);
  } else if (ageDiscount === "over") {
       price = (km * unitPrice * 0.6);
       console.log(price);
  } else  {
      price = (km * unitPrice);
      console.log(price);
  }
//}
document.getElementById("nomeCognome").innerHTML = nome;
document.getElementById("offerta").innerHTML =  ageDiscount;
document.getElementById("randomDue").innerHTML = Math.floor(Math.random() * 10 + 1);
document.getElementById("random").innerHTML = Math.floor(Math.random() * 100 + 1);
document.getElementById("total").innerHTML = "€" + price.toFixed(2);
})
