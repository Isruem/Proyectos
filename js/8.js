let edad = parseFloat(prompt("Ingrese su edad"));

function Edades(edad) {
    if(edad > 0 && edad <=10){
        document.write("Eres un Niño");
        document.write("<br>");
    }else if(edad>=11 && edad<=14){
        document.write("Eres un puberto ");
        document.write("<br>");
    }else if(edad>=15 && edad<=18){
        document.write("Eres un adolecente ");
        document.write("<br>");
    }else if(edad>=19 && edad<=25){
        document.write("Eres un joven adulto ");
        document.write("<br>");
    }else if(edad>=26 && edad<=65){
        document.write("Eres un adulto ");
        document.write("<br>");
    }else{
        document.write("Eres un Anciano ");
        document.write("<br>");
    }
    document.write("Por que tu edad es de ", edad)
    document.write("<br>");
}

Edades(edad);