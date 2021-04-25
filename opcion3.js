let NC = +prompt("Ingrese el numero de cita:");
let CC = 0; //CC = costo por cita
let TOT = 0; // TOT = Pago total por tratamiento

    for (let cont=1; cont<=NC; cont++) {
        if (cont <= 3) {
            CC = 200;
            TOT = NC * CC;
        }
        else if (cont <= 5) {
            CC = 150;
            TOT = (NC-3) * 150 + 600;
        }
        else if(cont <= 8){
            CC = 100;
            TOT = (NC - 5) * 100 + 900;
        }
        else {
            CC = 50;
            TOT = (NC - 8) * 50 + 1200;
        }
    }
    console.log(`El paciente pagara por cita: ${CC} - El monto por tratamiento es: ${TOT}`);
    alert(`El paciente pagara por cita: ${CC} - El monto por tratamiento es: ${TOT}`);
