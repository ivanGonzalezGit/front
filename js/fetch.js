
try
{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json));
}
catch(error)
{
    alert("se produjo un error, no se realizó el fetch ", error);
}
