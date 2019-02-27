var camaraJSON;
var camaraPush = [];
var camara = [];

function preload() {
  for (var page = 1; page < 7; page++) {
    camaraJSON = loadJSON("https://dadosabertos.camara.leg.br/api/v2/deputados?idLegislatura=56&pagina=" + page + "&itens=100&ordem=ASC&ordenarPor=nome");
    camaraPush.push(camaraJSON); // carrega todas as páginas
  }
}

function setup() {
  createCanvas(displayWidth, displayWidth);
  for (var i = 0; i < camaraPush.length; i++) { // merge array
    for (var j = 0; j < camaraPush[i].dados.length; j++) {
      camara.push(camaraPush[i].dados[j]);
    }
  }
  for (var i = 0; i < camara.length; i++) {
    console.log("Deputado: " + camara[i].nome + "  Partido:" + camara[i].siglaPartido);
  }
  console.log(camara);
}


function draw() {

}
