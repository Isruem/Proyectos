let comisionVenta = 0

function comisiones(comisionVenta) {
    sueldoMensual = 1000,
    montoVenta = parseInt(prompt
        ("Ingrese el monto de venta del vendedor"));
    if(montoVenta > 10000){
        comisionVenta = montoVenta * (15/100);
        console.log("Sueldo total: ", sueldoMensual + comisionVenta);
        document.write("Sueldo total ", sueldoMensual + comisionVenta)
    }else if(montoVenta>=5000 && montoVenta<10000){
        comisionVenta = montoVenta * (5/100);
        document.write("Sueldo total ", sueldoMensual + comisionVenta)
    }else if(montoVenta<5000){
        
        document.write("Sueldo total ", sueldoMensual + comisionVenta)
    }
}
comisiones(comisionVenta);
