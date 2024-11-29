function desplegarMenu()
{
    var hamburguesa = document.getElementById("hambur");
    var contenedorBotones = document.getElementById("botonesNav")

    hamburguesa.style.display = "none";
    contenedorBotones.style.display="flex";
}

function recomponerHamburguesa()
{
    var hamburguesa = document.getElementById("hambur");
    var contenedorBotones = document.getElementById("botonesNav")

    hamburguesa.style.display = "flex";
    contenedorBotones.style.display="none";
}

function recomponerNavPantallaGrande(){
    var contenedorBotones = document.getElementById("botonesNav");

    if(window.innerWidth>700)
    {
        contenedorBotones.style.display="flex";
    }
    else
    {
        contenedorBotones.style.display="none";
    }
}

window.addEventListener("resize", recomponerNavPantallaGrande);