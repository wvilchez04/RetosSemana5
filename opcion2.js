let tiposHamburguesa =[["Simple",20],["Doble", 25],["Triple",28]]

ti = +prompt("Seleccione el numero de tipo de hamburguesa: \n1 Sencilla\n2 Doble\n3 Triple");
pa = tiposHamburguesa[ti-1][1]
n = +prompt("Ingrese cantidad de hamburguesas:");
to = pa * n;
tp = +prompt("Seleccione el numero de forma de pago: \n1 Efectivo\n2 Tarjeta") ;
if(tp === 1) {
    tot = to;
}else if(tp === 2){
    tot = to * 0.05;
}
alert(`Debe pagar ${tot} soles por ${n} hamburguesas`);
