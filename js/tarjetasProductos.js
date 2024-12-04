var contenedor = document.getElementById("contenedorMain");

function agregarProducto()
{
    alert("Usted agregó el producto a su carrito exitosamente");
}

for (var i=1;i<13;i++)
{
    var contenido = document.createElement("article");

    contenido.innerHTML = `<h3>nombre</h3>
                                <img src="img/foto_${i}.jpg" alt="Foto Producto${i}"/>
                                <div class="precio">
                                    <span>Precio</span>
                                    <span>$1000</span>
                                </div>
                                <button class="agregarAlCarrito">Agregar al carrito</button>`;

    contenedor.appendChild(contenido);
}

document.querySelectorAll('.agregarAlCarrito').forEach(button => button.addEventListener('click', agregarProducto));