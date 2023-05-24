let Tiempo = parseFloat(prompt("Ingrese el tiempo en segundos"));
function segundosR(segundos) {
    let S = 60;
    let M = segundos % S;
    return M;
}
let M =segundosR(Tiempo);
document.write("Los segundos sobrantes de:" 
,Tiempo ," son " ,M );