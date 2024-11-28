var contenedor = document.getElementById("contenedorMain");

for (var i=1;i<13;i++)
{
    var contenido = document.createElement("article");

    contenido.innerHTML = `<h3>Producto</h3>
                                <img src="img/foto_${i}.jpg" alt="Foto Producto${i}"/>
                                <div>
                                    <span>Precio</span>
                                    <span>$1000</span>
                                </div>
                                <button>Agregar al Carrito</button>`;
    contenedor.appendChild(contenido);
}