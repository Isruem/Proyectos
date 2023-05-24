const numeros = [];

function numero(numeros) {
    while (true) {
    const numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar): "));
        if (numero === 0) {
            break;
        }
        numeros.push(numero);
        }
        let pares = 0;
        let impares = 0;
        for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
            if (numero % 2 === 0) {
            pares += 1;
            } else {
            impares += 1;
            }
        }
document.write("Lista que usted añadio fue:", numeros);
document.write("<br>")
document.write("Cantidad de números pares:", pares);
document.write("<br>")
document.write("Cantidad de números impares:", impares);
}

numero(numeros)