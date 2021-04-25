let cantidadLitros = +prompt("Escribe el numero de litros de leche producidos");
let precioGalon = prompt("Escribe el precio del galon de leche");
let cantidadGalonesProducida = cantidadLitros / 3.785;
let gananciaEntregaLeche = cantidadGalonesProducida * precioGalon;

alert(`El total por ${cantidadLitros} litros de leche es ${gananciaEntregaLeche}`);