

// Generar frases random desde un array
import { misFrases } from './frases.js'

var boton = document.getElementById('boton');
boton.onclick = generarFrase;

function generarFrase() {
    function randomNum(myMin,myMax){
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    };
    var frasesRandom = randomNum(0,7);
    document.getElementById('cajatexto').innerHTML = misFrases[frasesRandom];
    alert('Frase generada');
    
};

// Mezclador de colores

var botonverde = document.getElementById('opcionverde');
var botonazul = document.getElementById('opcionazul');
var botonamarillo = document.getElementById('opcionamarillo');
var botonrojo = document.getElementById('opcionrojo');
var botonverde2 = document.getElementById('opcionverde2');
var botonazul2 = document.getElementById('opcionazul2');
var botonamarillo2 = document.getElementById('opcionamarillo2');
var botonrojo2 = document.getElementById('opcionrojo2');

botonverde.onclick = function myFunction() {
    document.getElementById('cajacolor').style.backgroundColor = "rgba(0,255,0,1)";
  }
botonazul.onclick = function myFunction() {
    document.getElementById('cajacolor').style.backgroundColor = "rgba(0,0,255,1)";
  }
botonamarillo.onclick = function myFunction() {
    document.getElementById('cajacolor').style.backgroundColor = "rgba(255,255,0,1)";
  }
botonrojo.onclick = function myFunction() {
    document.getElementById('cajacolor').style.backgroundColor = "rgba(255,0,0,1)";
  }
botonverde2.onclick = function myFunction() {
    document.getElementById('cajacolor2').style.backgroundColor = "rgba(0,255,0,0.5)";
  }
botonazul2.onclick = function myFunction() {
    document.getElementById('cajacolor2').style.backgroundColor = "rgba(0,0,255,0.5)";
  }
botonamarillo2.onclick = function myFunction() {
    document.getElementById('cajacolor2').style.backgroundColor = "rgba(255,255,0,0.5)";
  }
botonrojo2.onclick = function myFunction() {
    document.getElementById('cajacolor2').style.backgroundColor = "rgba(255,0,0,0.5)";
  }

// Cambiar el color de fondo

var cambiarFondo = document.getElementById('cambiofondo');
cambiarFondo.onclick = function colorfondorandom() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var fondoColor = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById('maincaja2').style.backgroundColor = fondoColor;
}

// Cambiar el color de texto 

var cambiarTexto = document.getElementById('cambiotexto');
cambiarTexto.onclick = function colortextorandom() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var textoColor = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById('hcaja').style.color = textoColor;
}