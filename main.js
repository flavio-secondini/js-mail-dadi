var listaMail = ["nome.cognome0@gmail.com", "nome.cognome1@gmail.com", "nome.cognome2@gmail.com", "nome.cognome3@gmail.com", "nome.cognome4@gmail.com", ];

console.log(listaMail);

var mailUtente = prompt("Inserire indirizzo mail");

var spia = false;

for (var i = 0; i < listaMail.length; i++) {
  if (mailUtente == listaMail[i]) {
    spia = true;
  }
}

if (spia) {
  document.getElementById("responso").innerHTML = ("Corrisponde");
} else {
  document.getElementById("responso").innerHTML = ("Non corrisponde");
}
