let cantidad =parseFloat(prompt("Ingrese la cantidad"));

function descuentos(cantidad) {
    let descuento;
    if(cantidad >100){
    descuento= cantidad *0.1;
    }else{
    descuento =cantidad *0.02;
    }
    document.write("El descuento: ",
    cantidad+  " es del :" , descuento )
}
descuentos(cantidad)