// Tenemos un li de productos

const li = document.getElementById("lista-de-productos"); // Se cambio a selector getElementById
const userInput = document.querySelector('input'); // Se cambio nombre de la constante
const botonDeFiltro = document.querySelector("button"); 

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "../images/taco-negro.jpg"}, // redireccionamos las imágenes del objeto
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "../images/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "../images/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "../images/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "../images/zapato-rojo.jpg"}
]


// Cambiamos todos los var por let
for (let i = 0; i < productos.length; i++) {
  let newDiv = document.createElement("div") // cambiamos variable d a newDiv
  newDiv.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  newDiv.appendChild(ti)
  newDiv.appendChild(imagen)

  li.appendChild(newDiv)
}

// function displayProductos(productos) {
// Se comentó o elimina la función displayProducts que no nos sirve

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = userInput.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("producto");
  
    let ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    newDiv.appendChild(ti)
    newDiv.appendChild(imagen)
  
    li.appendChild(newDiv)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
