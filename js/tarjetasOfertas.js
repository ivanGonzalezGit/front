var contenedor = document.getElementById("contenedorMain");

function agregarProducto()
{
  /* cargar al sessionStorage*/

  /*<article>
  <img src="producto.jpg" alt="Producto">
  <button class="add-to-cart" data-product-id="123">Agregar al carrito</button>
</article>

<script>
  // Manejar el evento de clic
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.dataset.productId; // Obtener el ID del producto
      agregarAlCarrito(productId); // Llamar a la función con el ID
    });
  });

  // Ejemplo de función para manejar el carrito
  function agregarAlCarrito(productId) {
    console.log(`Producto con ID ${productId} agregado al carrito.`);
    // Aquí puedes manejar tu lógica con sessionStorage
  }
</script>*/

  
  alert("Usted agregó el producto a su carrito exitosamente");
}

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data => {for(let i=0; i<5; i++)
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

document.querySelectorAll('.AgregarAlCarrito').forEach(button => button.addEventListener('click', agregarProducto));