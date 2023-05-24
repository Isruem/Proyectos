let tarifa = prompt("Cual es su tarifa por hora")
let horasTrabajadas = prompt("Cuales son sus horas trabajadas")

function tarifas(tarifa,horasTrabajadas) {
    let salario= tarifa * horasTrabajadas;
if(salario >=500){
    document.write("El salario es mayor a $ 500");
}else{
    document.write("El salario es menor a $ 500")
}
}

tarifas(tarifa,horasTrabajadas)
