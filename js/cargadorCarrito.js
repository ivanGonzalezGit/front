

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

function mostrarCarrito()
{
    var carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(carrito);
}

function vaciarCarrito()
{
    localStorage.clear();
}
window.addEventListener('load', encabezadoDeGrilla);