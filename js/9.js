let hora = parseFloat(prompt("Ingrese la hora"));

function Horario(hora) {
        document.write("La hora es ",hora);
        document.write("<br>");
        if(hora >= 10 && hora <=12){
            document.write("la programacion es de:  ");
            document.write("Dibujos animados ");
        }else if(hora >= 13 && hora <=16){
            document.write("la programacion es de:  ");
            document.write("Tele serie ");
        }else if(hora >= 16 && hora <=18){
            document.write("la programacion es de:  ");
            document.write("Novelas ");
        }else if(hora >= 18 && hora <=22){
            document.write("la programacion es de:  ");
            document.write("Dibujos animados ");
        }else if(hora >= 22 && hora <=23){
            document.write("la programacion es de:  ");
            document.write("Noticiero ");
        }else{
            document.write("No hay programacion" );
        }
}
Horario(hora);


