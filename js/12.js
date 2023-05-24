const clavesCorrectas = ["TIENES","QUE SER","INVITADO","PARA","INGRESAR" ];

    function verificarClaves(clavesIngresadas) {
    if (clavesIngresadas.length !== clavesCorrectas.length) {
        return "TE EQUIVOCASTE DE FIESTA";
    }
    for (let i = 0; i < clavesCorrectas.length; i++) {
        if (clavesIngresadas[i] !== clavesCorrectas[i]) {
        return "TE EQUIVOCASTE DE FIESTA";
        }
    }
    return "BIENVENIDO A LA FIESTA";
        }
    const clavesIngresadas = ["TIENES","QUE SER","INVITADO","PARA","INGRESAR"];
    const resultado = verificarClaves(clavesIngresadas);
    document.write(resultado)
    