// acá hago el array con todos los productos junto al precio.
var productos = [
    { nombre: "Motherboard", precio: 75000 },
    { nombre: "Grafica", precio: 400000 },
    { nombre: "Ram", precio: 35000 },
    { nombre: "CPU", precio: 150000 },
];

// esta funcion lo que hace es que al pedir la opcion 2, busca los productos que hay y los agrega al carrito.
function buscarProducto(nombre) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === nombre.toLowerCase()) {
            return productos[i];
        }
    }
    return null;
}

// aca ponemos el carrito en cero y el total tambien
var carrito = [];
var total = 0;

// aca empieza el ciclo del ecommerce
while (true) {
    var opcion = prompt("Bienvenido a CompuGarza. ¿Qué quieres hacer el dia de hoy?\n1. Mostrar productos.\n2. Agregar al carrito.\n3. Vaciar carrito.\n4. Finalizar compra.\n5. Salir.");

    // aca empiezan los condicionales. 
    // si elije la opcion 1, que busque en el array productos y lo muestre con el nombre y al lado el precio.
    if (opcion === "1") {
        var productosDisponibles = "Nuestros productos Disponibles:\n";
        for (var i = 0; i < productos.length; i++) {
            productosDisponibles += productos[i].nombre + ": " + productos[i].precio + " ARS\n";
        }
        alert(productosDisponibles);
        // si se elije la opcion 2 te pida que producto queres llevar. Colocas en el prompt el producto y si está correcto te pregunta cuantos queres llevar, en caso de que no encuentre el producto en el array, te tira un mensaje que no existe o no tenemos el producto en stock.
        // si el producto existe y le seleccionas la cantidad que queres, este se guarda en la variable carrito que se suma el producto + el precio y hace el calculo del subtotal
    } else if (opcion === "2") {
        var nombreProducto = prompt("Ingrese el producto que desea llevar:");
        var producto = buscarProducto(nombreProducto);
        if (producto === null) {
            alert("Lo sentimos, no tenemos ese producto en stock o no existe.");
        } else {
            var cantidad = prompt("Ingrese la cantidad que quiere llevar:");
            var subtotal = producto.precio * cantidad;
            carrito.push({ producto: producto, cantidad: cantidad, subtotal: subtotal });
            total += subtotal;
            alert("Producto agregado al carrito con éxito.");
        }
        // si se elije la opcion 3 te pregunta por seguridad si se quiere vaciar el carrito o no. Al ingresar "s" se llama a la funcion vaciar carrito que lo que hace es llevar a cero el carrito
    } else if (opcion === "3") {
        var vaciarCarritoCompras = prompt("Quieres vaciar el carrito? (s/n)");
        if (vaciarCarritoCompras.toLowerCase() === "s") {
            vaciarCarrito();
        }
        // si se elije la opcion 4 te lleva al carrito, en caso de no tener productos en el carrito te dirá que no hay productos en el carrito.
        // en caso de haber productos en el carrito, este empieza a calcular la cantidad de productos y te dirá el total del carrito + los productos que estás llevando
    } else if (opcion === "4") {
        if (carrito.length === 0) {
            alert("No se agregaron productos al carrito.");
        } else {
            var factura = carrito.reduce(function (acumulador, producto) {
                acumulador += producto.cantidad + " x " + producto.producto.nombre + " = " + producto.subtotal.toFixed(2) + " ARS\n";
                return acumulador;
            }, "Productos en tu carrito:\n");

            factura += "Total: " + total.toFixed(2) + " ARS\nDeseas confirmar tu compra?";
            if (confirm(factura)) {
                alert("Gracias por su compra. Esperamos volver a verte!");
            } else {
                alert("Compra cancelada. Esperamos que la próxima compres algo!");
            }
            vaciarCarrito();
        }
        // al ingresar la opcion 5, el ciclo finaliza con el break.
    } else if (opcion === "5") {
        break;
        // en caso de ingresar otra cosa que no sea las opciones del 1 al 5, te avisará que no reconoce la opcion.
    } else {
        alert("Opción desconocida. Intente nuevamente.");
    }
}

// en esta funcion, el carrito se vacía y el total se va a cero y te tira un mensaje que se vació el carrito.

function vaciarCarrito() {
    carrito = [];
    total = 0;
    alert("El carrito se ha vaciado correctamente.");
}