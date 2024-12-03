
var productos = [
    {'id': 1, 'nombre': 'papaya', 'precio': 2000},
    {'id': 2, 'nombre': 'manzana', 'precio': 1500},
    {'id': 3, 'nombre': 'banano', 'precio': 1000}
];

console.log(productos);

var carrito = [[]]; // [[]] para indicar que es un arreglo vacío
agregarProducto(carrito);
function agregarProducto(carr)
{
    alert("Usted agregó el producto a su carrito exitosamente");
    var producto = 5;
    carr[0].push(producto)
    console.log(carr[0]);
}

function quitarProducto()
{
    alert("usted ha eliminado el producto de su carrito");
}

function encabezadoDeGrilla()
{
    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
    var carrito = document.createElement("div");
    carrito.className="grid-container";
    carrito.innerHTML= `
                            <div class="grid-item"><b>Id</b></div>
                            <div class="grid-item"><b>Imágen</b></div>
                            <div class="grid-item"><b>Nombre</b></div>
                            <div class="grid-item"><b>Precio</b></div>
                            <div class="grid-item"></div>`;
    contenedorCarrito.appendChild(carrito);
}

function mostrarItemCarrito(id, img, nombre, precio)
{   
    for (let i=1;i<6;i++)
        {
            var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
            var carrito = document.createElement("div");
            carrito.className="grid-container";
            carrito.innerHTML= `
                                    <div class="grid-item">${id}</div>
                                    <div class="grid-item"><img src="${img}"></div>
                                    <div class="grid-item">${nombre}</div>
                                    <div class="grid-item">$${precio}</div>
                                    <div class="grid-item"><button onclick="quitarProducto()" class="quitar">Quitar</button></div>`;
            contenedorCarrito.appendChild(carrito);
        }
}

function totalPrecio(precioTotal)
{

    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
    var carrito = document.createElement("div");
    carrito.className="grid-container";
    carrito.innerHTML= `    <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"><b>Precio Total</b></div>
                            <div class="grid-item"><b>$${precioTotal}</b></div>
                            <div class="grid-item"><button class="navButtons">Comprar</button><button onclick="vaciarCarrito()" class="quitar">Vaciar Carrito</button></div>`;

    contenedorCarrito.appendChild(carrito);
}

encabezadoDeGrilla();
mostrarItemCarrito(1, "img/foto_1.jpg", "Ciervo Moteado", 100000);
totalPrecio(100000);