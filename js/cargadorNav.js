var contenedorNav = document.getElementById("cargadorNav");
var encabezado = document.createElement("div");

encabezado.innerHTML= ` <header>
                        <h1>Todo Baratito...</h1>
                    </header>
                    <nav class="contenedorNav">
                        <div id="hambur" onclick="desplegarMenu()"><i id="rayitas" class="fa-solid fa-bars"></i></div>
                        <div id="botonesNav">
                            <button id="cerrarMenuVertical" class="navButtons" onclick="recomponerHamburguesa()">X</button>
                            <div class="navButtons"><a href="index.html">Inicio</a></div>
                            <div class="navButtons"><a href="productos.html">Productos</a></div>
                            <div class="navButtons"><a href="resenia.html">Reseña</a></div>
                            <div class="navButtons"><a href="formulario.html">Contacto</a></div>
                            <div class="navButtons"><a href="carrito.html">Carrito</a></div>
                        </div>
                    </nav>`;

contenedorNav.appendChild(encabezado);