    let horasTrabajadas = parseFloat(prompt("Ingrese sus horas trabajadas")),
        tarifaPagoHora = 10,
        horasNormales = 40,
        horasExtra = parseFloat(prompt("Ingrese sus horas extra trabajadas"));


        function pago(horasTrabajadas,tarifaPagoHora) {
        let pago = horasTrabajadas * tarifaPagoHora;

        if(horasTrabajadas>40){
            let tarifaPagoHoraExtra = tarifaPagoHora +(tarifaPagoHora * (50/100));
            // tarifaPagoHora = tarifaPagoHora + tarifaPagoHoraExtra;
            horasExtra = horasTrabajadas - horasNormales;
            let pagoHorasExtra = horasExtra * tarifaPagoHoraExtra;
            
        }

        document.write("Horas trabajadas: "+ horasTrabajadas);
        document.write("<br>")
        document.write("<br>")
        document.write("Salario total: " + pago );
            }

            document.querySelector(pago(horasTrabajadas,tarifaPagoHora))
