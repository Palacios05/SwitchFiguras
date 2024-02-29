var opcion
var area

opcion = parseInt(prompt("Desea calcular el area de un: \n 1. Cuadrado \n 2. Triangulo \n 3. Circulo "))

switch (opcion) {
    
    case 1:
    
    var lado

    lado = prompt("Ingrese la medida de un lado")

    area = lado * lado

    alert("El area del cuadrado es " + area + "Centimetros Cuadrados")

    break;

    case 2:

    var base
    var altura

    base = prompt("Ingrse la base del rectangulo")
    altura = prompt("Ingrese la altura del rectangulo")

    area = base * altura

    alert("El area del rectangulo es " + area + "Centimetros Cuadrados")

    break;

    case 3:

    var pi = 3.1416
    var radio

    radio = prompt("Ingrese el radio del circulo")
    
    area = pi*Math.pow(radio, 2)

    alert("El area del circulo es " + area + "Centimetros Cuadrados")

    break;
  }

  /* Codigo para encontrar areas de figuras */
  
  