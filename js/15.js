let numerosNaturales = [];
document.write("Numeros Seleccionados: ")
function seleccionarNumero(n){
    if(n <0){
        return false;
    }
    if(n  <15){
        numerosNaturales.push(n +" Es menor a 15 ");
        document.write(numerosNaturales)
    }else if(n >50){
        numerosNaturales.push(n+ " Es mayor a 50");
        document.write(numerosNaturales)
    }else if(n >=25 && n<=50){
        document.write(n," "," Esta entre los numeros 25 y 50 ")
    }
return true;
}
while (true) {
    let input = parseInt(prompt("Ingrese un número natural (ingrese un número negativo para terminar):"));
    if (!seleccionarNumero(input)) {
        break;
    }
}
for (var i = 0; i < numerosNaturales.length; i++) {
    console.log(numerosNaturales[i]);
}