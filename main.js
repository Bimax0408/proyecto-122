x = 0;

y = 0;

dibujar_circulo="";

dibujar_rectangulo="";

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = newspeechRecognition();

function start() {
    document.getElementById("status").innerHTML="¡Estoy escuchando, di la figura que quieres que dibuje!";
    Recognition.start();

}

Recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML="La voz reconocio: " + content;
    if(content =="circulo")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se comenzo a dibujar circulo ";
        draw_circle = "set";
    }
    if(content == "rectangulo")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se comenzo a dibujar rectangulo ";
        draw_rect = "set";
    }
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circulo(x, y, radius);
        document.getElementById("status").innerHTML = "Se dibujo un circulo. ";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        rectangulo(x,y,70,50);
        document.getElementById("status").innerHTML = "Se dibujo un rectangulo ";
        draw_rect = "";
    }
}