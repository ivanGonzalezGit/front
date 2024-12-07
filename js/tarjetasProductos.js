var contenedor = document.getElementById("contenedorMain");

function agregarProducto(event)
{
  var producto = {
    id: event.target.getAttribute('data-id'),
    img: event.target.getAttribute('data-img'),
    nombre: event.target.getAttribute('data-nombre'),
    precio: event.target.getAttribute('data-precio')
  };

  var carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
  carrito.push(producto); 
  localStorage.setItem('carrito', JSON.stringify(carrito));

  alert('Usted agregó un producto al carrito')
}

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data => {for(let i=0; i<data.length; i++)
                {
                  var contenido = document.createElement("article"); 
                  contenido.innerHTML =`<h3>Producto${i+1}</h3>
                                        <img src="${data[i].image}" alt="Foto Producto${i}"/>
                                        <div class="precio">
                                          <span>Precio</span>
                                          <span>${data[i].price}</span>
                                        </div>
                                        <button class="agregarAlCarrito"    onclick="agregarProducto(event)"
                                          data-id = "${data[i].id}"
                                          data-img = "${data[i].image}"
                                          data-nombre = "Producto${i+1}"
                                          data-precio ="${data[i].price}">Agregar al carrito
                                      </button>`;
                  contenedor.appendChild(contenido);
                }
            })