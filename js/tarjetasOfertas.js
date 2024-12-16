var contenedor = document.getElementById("contenedorMain");
contenedor.innerHTML = "<div class='spinner-border text-success' role='status'><span class='visually-hidden'>Loading...</span></div>";
contenedor.style.justifyContent = "center";

function agregarProducto(event)
{
  var producto = {
    id: event.target.getAttribute('data-id'),
    img: event.target.getAttribute('data-img'),
    nombre: event.target.getAttribute('data-nombre'),
    precio: event.target.getAttribute('data-precio'),
    cargado: event.target.getAttribute('data-cargadoAlCarrito'),
    cdad: "1"
  };

  if(producto.cargado == "0")
  {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || []; //creo una variable carrito y traigo lo que tiene guardado localStorage. pero como solo se puede grabar texto en localstorage tengo que convertirlo a json para poder trabajarlo como lista o json u objeto. si no tiene nada se le asigna un array vacío.
    carrito.push(producto); //a carrito lo trato como una lista u objeto y mediante push le agrego un producto.
    localStorage.setItem('carrito', JSON.stringify(carrito)); // grabo el item de localstorage con el carrito actualizado.
    
    let botonArticulo = document.querySelector(`[data-id="${producto.id}"]`);

    botonArticulo.style.background = "#eb5b5b";
    botonArticulo.style.border = "1px solid #e74848";
    botonArticulo.textContent = "Producto Agregado";
    botonArticulo.setAttribute('data-cargadoAlCarrito', '1');
    alert('Usted agregó un producto al carrito'); 
  }
  else
  {
    alert('Su producto ya fue agregado')
  }

}

async function cargarGaleria() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        
        contenedor.innerHTML='';
        contenedor.style.justifyContent = "left";
        
        for (let i = 0; i < data.length; i++) {
            var contenido = document.createElement("article");
            contenido.innerHTML = `
                <h6>${data[i].title.substring(0,18)}</h6>
                <img src="${data[i].image}" alt="Foto Producto ${i}" />
                <div class="precio">
                    <span>Precio</span>
                    <span>${data[i].price}</span>
                </div>
                <button class="agregarAlCarrito" onclick="agregarProducto(event)"
                    data-id="${data[i].id}"
                    data-img="${data[i].image}"
                    data-nombre="${data[i].title.substring(0,10)}"
                    data-precio="${data[i].price}"
                    data-cargadoAlCarrito="0">Agregar al carrito
                </button>`;
            contenido.style.margin = "15px";
            contenido.style.marginBottom = "30px";
            contenedor.appendChild(contenido);
        }

        comparacion();

    } catch (error) {
        alert('Se produjo un error de conexión: ', error);
    }
}

function comparacion() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) 
    {
    } 
    else 
    {
        carrito.forEach(element => {
            let botonArticulo = document.querySelector(`[data-id="${element.id}"]`);

            if (botonArticulo) {
                botonArticulo.style.background = "#eb5b5b";
                botonArticulo.style.border = "1px solid #e74848";
                botonArticulo.textContent = "Producto Agregado";
                botonArticulo.setAttribute('data-cargadoAlCarrito', '1');
            }
        });
    }
}

window.addEventListener('load', cargarGaleria);