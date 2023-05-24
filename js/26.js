//Ejercicio 26        
        
let jornalMensual = [];
        

function Mes(jornalMensual) {
    while(true){
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas (0 para salir):"));
    let turno = 0,
        tarifaHoraD = 10,
        tarifaHoraN = 20;
                
    if (horasTrabajadas === 0) {
        break;
    }else if(horasTrabajadas<15){
        turno = parseInt(prompt("Elija su turno 1.-Diurno, 2.-Nocturno"));

        if(turno ==  1){

            document.write("Turno: Diurno");
            document.write(`Usted esta despedido ya que sus ${horasTrabajadas} horas son menores que 15`);
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraD);
        }else if(turno == 2){
            document.write("Turno: Nocturno");
            document.write(`Usted esta despedido ya que sus ${horasTrabajadas} horas son menores que 15`);
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraN);
        }
                
    }else{
                
        turno = parseInt(prompt("Solo se permite 1 o 2\
                Elija su turno 1.-Diurno, 2.-Nocturno"));
        if(turno == 1){
            document.write("Turno: Diurno");
            document.write(`Horas trabajadas: ${horasTrabajadas}`);
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraD);
        }else if(turno == 2){
            document.write("Turno: Nocturno");
            document.write(`Horas trabajadas: ${horasTrabajadas}`);
            document.write("Su sueldo fue de: ", horasTrabajadas * tarifaHoraN);
        }
    }

    jornalMensual.push(horasTrabajadas);

    function sumarArreglo(jornalMensual) {
        let suma = 0;
        for (let i = 0; i < jornalMensual.length; i++) {
            suma += jornalMensual[i];
        }
        return suma;
    }
    let resultado = sumarArreglo(jornalMensual);
    document.write("Jornal mensual: ",resultado);
        
}
}

Mes(jornalMensual)
