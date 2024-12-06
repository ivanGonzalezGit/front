var contenedor = document.getElementById("contenedorMain");

function agregarProducto()
{
    alert("Usted agregó el producto a su carrito exitosamente");
}

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data => {for(let i=0; i<data.length; i++)
                {
                    var contenido = document.createElement("article");
    
                    contenido.innerHTML = `<h3>Producto${i+1}</h3>
                                        <div id= "${data[i].id}"></div>
                                        <img src="${data[i].image}" alt="Foto Producto${i}"/>
                                        <div class="precio">
                                        <span>Precio</span>
                                        <span>${data[i].price}</span>
                                        </div>
                                        <button class="AgregarAlCarrito">Agregar al carrito</button>`;
            
                    contenedor.appendChild(contenido);
                }
            })

document.querySelectorAll('.agregarAlCarrito').forEach(button => button.addEventListener('click', agregarProducto));