/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */
let totalAbsoluto = 0

function compra(nombre, precio) {
    let guardarCompra = [];
    let precioFinal = document.getElementById("preuFinal");
    let cantidad = Number(prompt(`¿Que cantidad de ${nombre} desea?`));
    if (isNaN(cantidad)) {
        alert("Introduce un valor numerico")
        return
    }
    let total = cantidad * precio;
    let dosDecimales = total.toFixed(2);
    let PrecioAbsoluto = Number(dosDecimales);
    totalAbsoluto += PrecioAbsoluto;
    precioFinal.innerHTML = PrecioAbsoluto;
    if (cantidad != 0) {
        var mensaje = document.getElementById("carrito").innerHTML += `<i class="fa-solid fa-trash-can" onclick="borrar()">'  '${nombre}  ${cantidad}  X  ${precio} €/kg =  ${PrecioAbsoluto} € <br>`;
        guardarCompra.push(mensaje);
    } else {
        alert("Introduce un numero mayor que cero")
    }
    console.log(totalAbsoluto);
    let totalDosDecimales = totalAbsoluto.toFixed(2);
    precioFinal.innerHTML = totalDosDecimales;

   //funcion para borrar
const elPadre = document.getElementById(carrito);
function borrar() {
    let mensaje2 = elPadre.removeChild(mensaje);
    console.log(mensaje2);
}

    // console.log(mensaje);
    // document.getElementById("total").style.fontSize = 18px;
}





