var productos = [
    { nombre: "Motherboard", precio: 75000 },
    { nombre: "Grafica", precio: 400000 },
    { nombre: "Ram", precio: 35000 },
    { nombre: "CPU", precio: 150000 },
];

function buscarProducto(nombre) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            return productos[i];
        }
    }
    return null;
}

var carrito = [];
var total = 0;

while (true) {
    alert("Productos: Motherboard, Grafica, Ram, CPU")
    var nombreProducto = prompt("Ingresa el producto que necesites. (o 'salir' para terminar con la compra):");

    if (nombreProducto === "salir") {
        break;
    }

    var producto = buscarProducto(nombreProducto);

    if (producto === null) {
        alert("Lo sentimos, no tenemos ese producto en stock o no existe.");
    } else {
        var cantidad = prompt("Ingrese la cantidad a llevar:");
        var subtotal = producto.precio * cantidad;
        carrito.push({ producto: producto, cantidad: cantidad, subtotal: subtotal });
        total += subtotal;
        alert("Producto agregado al carrito con exito.");
    }
}

if (carrito.length === 0) {
    alert("No se agregaron productos al carrito.");
} else {
    var factura = "Productos en el carrito:\n";

    for (var i = 0; i < carrito.length; i++) {
        factura += carrito[i].cantidad + " x " + carrito[i].producto.nombre + " = " + carrito[i].subtotal.toFixed(2) + "\n";
    }

    factura += "Total: " + total.toFixed(2) + " ARS\n¿Desea confirmar su compra?";

    if (confirm(factura)) {
        alert("Gracias por su compra. Esperamos volverte a ver!");
    } else {
        alert("Compra cancelada. Esperemos que la proxima compres algo!");
    }
}