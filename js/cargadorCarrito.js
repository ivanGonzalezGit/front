
function mostrarItemCarrito(id, img, nombreProducto, precio)
{

    var contenedorCarrito = document.getElementById("cargadorGrillaCarrito");
    var carrito = document.createElement("div");


    carrito.innerHTML= `
                    <div class="grid-container">
                        <div class="grid-item">Id</div>
                        <div class="grid-item">Imágen</div>
                        <div class="grid-item">Nombre</div>
                        <div class="grid-item">Precio</div>
                        <div class="grid-item">Agregar</div>
                    
                        <div class="grid-item">${id}</div>
                        <div class="grid-item"><img src="${img}" alt="${nombreProducto}"></div>
                        <div class="grid-item">${nombreProducto}</div>
                        <div class="grid-item">${precio}</div>
                        <div class="grid-item">Agregar</div>
                    </div>`;

    
    contenedorCarrito.appendChild(carrito);
}

mostrarItemCarrito("01", "img/foto_1.jpg", "Ciervo Moteado", 100000);