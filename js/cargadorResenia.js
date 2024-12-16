var contenedor = document.getElementById("contenedorResenia");

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(producto => {
        for(let i=0;i<producto.length;i++)
        {
            var foto = document.createElement('div');
            var descripcion = document.createElement('div');
            
            foto.innerHTML = `<img src="${producto[i].image}" alt="${producto[i].title}">`;
            foto.style.marginBottom = "50px";
            descripcion.innerHTML = `<p>${producto[i].description}</p>`;
            descripcion.style.marginBottom = "50px";
            contenedor.appendChild(foto);
            contenedor.appendChild(descripcion);        
        }

    })
    .catch(error => {
        alert('Se produjo un error de conexión: ', error);
    });
