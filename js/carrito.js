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
let totalAbsoluto = 0 //aqui guardamos el total de la compra
let guardarCompra = [];    //aqui guardamos todos los elementos de la compra

function compra(nombre, precio) {
    let precioFinal = document.getElementById("preuFinal"); //aqui obtenemos el lugar donde aparecera el total  
    let cantidad = Number(prompt(`¿Que cantidad de ${nombre} desea?`)); //aqui obtenemos la cantidad de cada elemento de la compra
    if (isNaN(cantidad)) { //si no es un numero entonces introduce un valor numerico y para a la función
        alert("Introduce un valor numerico")
        return
    }
    let total = cantidad * precio;  //aqui obtenemos el total 
    let dosDecimales = total.toFixed(2); //aqui convertimos el total en dos decimales
    let PrecioAbsoluto = Number(dosDecimales); //aqui aseguramos obtener un numero  
    totalAbsoluto += PrecioAbsoluto; //aqui sumamos cada elemento al precio absoluto    
    precioFinal.innerHTML = PrecioAbsoluto; //aqui introducimos al html el precio absoluto
 

    let objeto = new Object; //creamos un objeto
    objeto.id = new Date().getTime(); //asignamos un id
    objeto.nombre = `${nombre}`; //asignamos el nombre
    objeto.precio = `${PrecioAbsoluto}`; // asignamos el precio

    
    if (cantidad != 0) { //si lacantidad no es igual a cero añadimos al carrito y guardamos en la compra
        var mensaje = document.getElementById("carrito").innerHTML += `<p><i id="borrar" class="fa-solid fa-trash-can"></i>  ${nombre}  ${cantidad}  X  ${precio} €/kg =  ${PrecioAbsoluto} € <br></p>`;
        guardarCompra.push(objeto);
    } else {
        alert("Introduce un numero mayor que cero")// si es cero entonces muestra un mensaje de error
    }
    let totalDosDecimales = totalAbsoluto.toFixed(2);   //aqui establecemos dos decimales al precio absoluto
    precioFinal.innerHTML = totalDosDecimales;  // aqui introducimos al precio absoluto al html


    //aqui hago un bucle para iterar sobre los elementos de la compra
    console.log("aqui muestro los arrays del carrito", guardarCompra);
   for (let i = 0; i < guardarCompra.length; i++) {
    let elementoId = guardarCompra[i].id;
    let elementoNombre = guardarCompra[i].nombre; 
    let elementoPrecio = guardarCompra[i].precio;

    document.addEventListener("click", function (event) {
        if (event.target.id == "borrar") {
            console.log("borrando");
            for (let i = 0; i < guardarCompra.length; i++) {
                if (guardarCompra[i].id == elementoId) {
                    console.log("borrando id");
                    guardarCompra.splice(i, 1);
                    console.log(guardarCompra);
                    // let guardarVenta = document.getElementById(elementoId);
                }
            }
        }
    })
    };
}

