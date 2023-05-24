let a = parseFloat(prompt("Ingrese el tamaño del primer lado"));
let b = parseFloat(prompt("Ingrese el tamaño del segundo lado"));
let c = parseFloat(prompt("Ingrese el tamaño del tercer lado"));
function Triangulos(a,b,c) {
    if(a+b >c && a+c >b && b+c >a){
            if(a === b && b===c){
                document.write("Usted a formado un triangulo equilatero");
            }else if(a=== b || b === c || c === a){
                document.write("Usted a formado un triangulo isoseles");
            }else{
                document.write("Usted a formado un triangulo escaleno");
            }
    }else{
        document.write("Usted no a formando un triangulo");
    }
}
document.querySelector(Triangulos(a,b,c));

