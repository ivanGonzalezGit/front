var contenedor = document.getElementById("contenedorMain");

for (var i=1;i<6;i++)
{
    var contenido = document.createElement("article");

    contenido.innerHTML = `<h3>nombre</h3>
                                <img src="img/foto_${i}.jpg" alt="Foto Producto${i}"/>
                                <div class="precio">
                                    <span>Precio</span>
                                    <span>$1000</span>
                                </div>
                                <button onclick="agregarProducto()" class="navButtons">Agregar al carrito</button>`;
    contenedor.appendChild(contenido);
}
