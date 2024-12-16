
function quitarProducto(idProducto) 
{
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(function (producto) {
        return producto.id !== idProducto;
    });
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    mostrarItemCarrito();
    totalPrecio();
}

function encabezadoDeGrilla()
{
    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
    var carrito = document.createElement("div");
    carrito.className="grid-container";
    carrito.innerHTML= `
                        <div class="grid-item"><b>Imágen</b></div>
                        <div class="grid-item"><b>Nombre</b></div>
                        <div class="grid-item"><b></b></div>
                        <div class="grid-item"><b>cdad</b></div>
                        <div class="grid-item"><b></b></div>
                        <div class="grid-item"><b>Precio</b></div>
                        <div class="grid-item"></div>`;
    contenedorCarrito.appendChild(carrito);
}

function mostrarItemCarrito() 
{
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");

    contenedorCarrito.innerHTML = '';
    encabezadoDeGrilla();
    for (let i = 0; i < carrito.length; i++) {
        var itemCarrito = document.createElement("div");
        itemCarrito.className = "grid-container";
        itemCarrito.innerHTML = `
            <div class="grid-item"><img src="${carrito[i].img}"></div>
            <div class="grid-item">${carrito[i].nombre}</div>
            <div class="grid-item"><b><button onclick="decrementarCdad('${carrito[i].id}')" class="cdad">-</button></b></div>
            <div class="grid-item">${carrito[i].cdad}</div>
            <div class="grid-item"><b><button onclick="incrementarCdad('${carrito[i].id}')" class="cdad">+</button></b></div>
            <div class="grid-item">$${carrito[i].precio*carrito[i].cdad}</div>
            <div class="grid-item"><button onclick="quitarProducto('${carrito[i].id}')" class="quitar">Quitar</button></div>`;
        contenedorCarrito.appendChild(itemCarrito);
    }
}

function totalPrecio()
{
    var precioTotal = 0;
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    for( let i=0; i<carrito.length; i++)
    {
        precioTotal = precioTotal + parseFloat(carrito[i].precio*carrito[i].cdad);
    }
    var precioTotalTruncado = truncarDec(precioTotal);
    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
    var totalCarrito = document.createElement("div");
    totalCarrito.className="grid-container";
    totalCarrito.innerHTML= `    <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item"><b>Precio Total</b></div>
                            <div class="grid-item"><b>$${precioTotalTruncado}</b></div>
                            <div class="grid-item"><button onclick="comprar()" class="navButtons">Comprar</button><button onclick="vaciarCarrito()" class="quitar">Vaciar Carrito</button></div>`;

    contenedorCarrito.appendChild(totalCarrito);
}

function truncarDec(num) 
{
    return Math.trunc(num * 100) / 100;
}

function vaciarCarrito() 
{
    localStorage.clear();
    const carritoContainer = document.getElementById("cargadorGrillaCarrito");
    carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
}

function incrementarCdad(id)
{
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(element => {
        if (element.id == id)
        {
            element.cdad++;       
        }
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    mostrarItemCarrito();
    totalPrecio();
    });
}

function decrementarCdad(id)
{
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(element => {
        if (element.id == id)
        {
            if (element.cdad>1)
            {
                element.cdad--; 
            }
        }
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    mostrarItemCarrito();
    totalPrecio();
    })
}

function comprar()
{
    alert('La compra se realizó con éxito');
}

window.addEventListener('load', () => {
    mostrarItemCarrito();
    if(localStorage.getItem('carrito') == null)
    {
        const carritoContainer = document.getElementById("cargadorGrillaCarrito");
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
    }
    else
    {
        totalPrecio();
    }
});
