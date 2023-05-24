let minutos = parseFloat(prompt
    ("Ingrese el numero de minutos que desea calcular"));
    function Minutos(minutos) {
        let dias = 0,
        horas = 0;
        if(minutos>0){
            dias = minutos / 1440;
            horas = minutos / 60;
        }
        document.write("El tiempo a calcular es:  "
        ,minutos)
        document.write("<br>")
        document.write(" Los dias de estos minutos son: ",
        dias)
        document.write("<br>")
        document.write("\n\t Las horas de estos minutos son ",
        horas)
    }
    Minutos(minutos)



