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
 let precioFinal = document.getElementById("preuFinal"); //aqui obtenemos el lugar donde aparecera el total 


 function compra(nombre, precio) {
     let cantidad = Number(prompt(`¿Que cantidad de ${nombre} desea?`)); //aqui obtenemos la cantidad de cada elemento de la compra
     if (isNaN(cantidad) || cantidad == 0) { //si no es un numero entonces introduce un valor numerico y para a la función
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
     // console.log("esto es el id de la compra", idArrayObjeto);

     guardarCompra.push(objeto);


     
    //mostrar en el carrito
    document.getElementById("carrito").innerHTML +=  `<p id='${objeto.id}'><i class="borrar fa-solid fa-trash-can"></i>  ${nombre}  ${cantidad}  X  ${precio} €/kg =  ${PrecioAbsoluto} € <br></p>`;
    console.log("ver el array de compra", guardarCompra);


     //borrar y restar

     for (let i = 0; i < guardarCompra.length; i++) { //aqui iteramos sobre los elementos de la compra guardados para buscar el id
        var compra = guardarCompra[i].id;        
     }

     let totalResta = 0;
     const removerProductoBtn = document.getElementsByClassName("fa-solid"); // aqui buscamos el elemento de la papelera
     for (let i = 0; i < removerProductoBtn.length; i++) { //creamos un bucle for para iterar sobre los elementos de la papelera
        removerProductoBtn[i].addEventListener("click", (event) => { //creamos a partir de la elemento de la papelera un evento de escuchar el click
            event.target.parentElement.remove(); //buscamos el parent element para borrar
            
            console.log("vamos a ver en consola el precio final", precioFinal); 
            console.log(objeto);
            totalResta = totalAbsoluto - Number(objeto.precio);//resto del total el precio del producto quitado
            console.log(`vamos a ver como se resta`, typeof(precioFinal));
            console.log("menos", objeto.precio);
            console.log("mostrar el resultado de la resta", typeof(totalResta));
           
    })
     precioFinal.innerHTML = totalResta; //aqui ponemos solo dos decimales del precio
     let totalDosDecimales = totalAbsoluto.toFixed(2);   //aqui establecemos dos decimales al precio absoluto
     precioFinal.innerHTML = totalDosDecimales;  // aqui introducimos al precio absoluto al html
 

    }
}