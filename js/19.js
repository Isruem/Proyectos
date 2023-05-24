let numero = parseInt(prompt("Introduce un numero de 2 o mas digitos"));
let sumar = sumarNumero(numero);
    function sumarNumero(numero) {
        let suma = 0;
        for (let digito of numero.toString()) {
            suma += parseInt(digito);
        }
    return suma;
}
document.write(`La suma de los digitos de ${numero} es: ${sumar}`)

