var parar = 0;

while(parar == 0){

console.log("bem vindo a nerd ao cubo")
console.log("")
console.log("caneca")
var cnc = 30;
console.log("")
console.log("camisetas")
var cam = 50;
console.log("")
console.log("adesivo")
var ade = 10;
console.log("")
var frete = 20;
var expr = prompt("Escolha um produto")
console.log("")

if(expr == 'caneca'){

console.log("o valor é R$" + cnc)
console.log("")

var expt = prompt("a forma de pagamento: dinheiro ou cartão?")

switch(expt){

case 'dinheiro' :

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(cnc + frete)
 console.log("seu produto esta indo até você")

break

case 'cartão' :

console.log("sua id é 564")
 var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confirmar")
} while(expz === 564)

var z = prompt("numero do cartão:")
var z = prompt("CVV:")
var z = prompt("senha:")

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(cnc + frete)
 console.log("seu produto esta indo até você")


break

}

break}

else if(expr == 'camiseta'){

console.log("o valor é R$" + cam)
console.log("")
var expt = prompt("a forma de pagamento: dinheiro ou cartão?")

switch(expt){

case 'dinheiro' :

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(cam + frete)
 console.log("seu produto esta indo até você")

break

case 'cartão' :

console.log("sua id é 564")
 var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confirmar")
} while(expz === 564)

var z = prompt("numero do cartão:")
var z = prompt("CVV:")
var z = prompt("senha:")

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(cam + frete)
 console.log("seu produto esta indo até você")


break
}

break}

else if (expr == 'adesivo'){

console.log("o valor é R$" + ade)
console.log("")

var expt = prompt("a forma de pagamento: dinheiro ou cartão?")

switch(expt){

case 'dinheiro' :

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(ade + frete)
 console.log("seu produto esta indo até você")

break

case 'cartão' :

console.log("sua id é 564")
 var expz = prompt("confirme a ID")

     do {
  console.log("obrigado por confirmar")
} while(expz === 564)

var z = prompt("numero do cartão:")
var z = prompt("CVV:")
var z = prompt("senha:")

 for(var expf = prompt("Digite seu endereço:"); expf <= 3; expf++){console.log(expr)}
 console.log("o valor do frete é R$20,00 o valor final é")
 console.log(ade + frete)
 console.log("seu produto esta indo até você")


break
}

break}

else if(expr != 'caneca' && expr != 'camiseta' && expr != 'adesivo'){

  console.log("tente outra vez!")
}

}