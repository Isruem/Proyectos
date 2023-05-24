let horasTrabajadas2 = parseFloat(prompt
    ("Ingrese sus horas trabajadas en la semana"));
    function Trabajo(horasTrabajadas2) {
        let tarifasPago = 50;
        let salario = horasTrabajadas2*tarifasPago;

        document.write("Las horas trabajadas son: ",
        horasTrabajadas2);
        document.write("<br>");
        document.write("\nLa tarifa es: ", tarifasPago);
        document.write("<br>");
        document.write("\nEl salario es: ", salario)
    }
Trabajo(horasTrabajadas2);
