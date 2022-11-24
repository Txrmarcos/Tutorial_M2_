var printar = "#printar"
var printar0 = "#printar0"


function servidorGet(){
    var url = "https://jsonplaceholder.typicode.com/todos/1";
    var lhttps = new XMLHttpRequest();
    lhttps.open("GET", url, false);
    lhttps.send();
    $(printar).append("<br />" + lhttps.responseText);
    $(printar).append("<br />" + lhttps.responseText.title);
}

function buscarGet(){
    var url = 'http://localhost:3000/experiencia';
    var resposta;

    var lhttps = new XMLHttpRequest();
    lhttps.open("GET", url, false);
    lhttps.send();

    resposta = JSON.parse(lhttps.responseText);
    $(printar0).append("<br /><br />" + JSON.stringify(resposta));
}