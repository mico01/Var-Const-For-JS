document.writeln("-Variable Constantes y For-"+"<br>");
document.writeln("..........................."+"<br>");
var nombre = "fabrizio";
var cognome = "pantini";
var cognome1 = "contestabile";
var dia = 6;
var mes = 1;
var anno = 1975;
document.writeln(nombre+" "+cognome+" "+cognome1+"<br>");
document.writeln(dia +"/"+mes+"/"+anno+"<br>");

const annoTraspaso = 1948;
const cadaTraspaso = 4;
var diferencia = (anno - annoTraspaso)/4;
document.writeln(diferencia);
document.writeln("<br>");
var anniDiTraspaso = [];

for (i=annoTraspaso; i<=anno; i +=cadaTraspaso)
{
    anniDiTraspaso.push(i);    
}
document.writeln(anniDiTraspaso);

function miFuncion(x)
{
    x++;
}

var annoBool = (anno==anniDiTraspaso.map(miFuncion));

document.writeln( "<br>");
 
if (annoBool){
    document.writeln("naciste en un año de traspaso");
}
else{
    document.writeln("no naciste en un año de traspaso");
}

document.writeln("<br>"+"---FASE4--------"+ "<br>");

var miNombreCompleto = nombre+" "+cognome+" "+cognome1;
var miDatosCompleto = dia + "/"+mes+"/"+anno;
document.writeln(miNombreCompleto);
document.writeln( "<br>");
document.writeln(miDatosCompleto);



