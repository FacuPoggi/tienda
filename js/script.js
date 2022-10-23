let carrito = [];


const btnLogin = document.querySelector(".btn-dark"),
    carritoItemSuma = document.getElementById("carrito-item-suma"),
    conjuntoDeProductos = document.querySelector(".conjunto-de-productos");


class Producto {
    constructor(id, nombre, precio, color, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    listarProductos() {
        let container = document.getElementById("container")
        let cardgroup = document.createElement('div')
        cardgroup.classList.add("card-group")
        container.appendChild(cardgroup)
        for (let i = 0; i < productosNuevo.length; i++) {
            let div = document.createElement('div')
            div.classList.add("card")
            div.innerHTML = ` 
            <img class="img-cards" src="${productosNuevo[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${productosNuevo[i].nombre}</h5>
            <hr>
            <p class="card-text">${productosNuevo[i].descripcion}</p>
            <button id="${productosNuevo[i].id}" type="button" class="btn-compra btn btn-dark">Comprar</button>
            </div>
            `;
            cardgroup.appendChild(div)
        }
    }


    agregarProductoCarrito(producto) {
        let coincidencia = productosNuevo.filter(x => x.id == producto)
        carrito.push(coincidencia)

        let articulo 
        
        for (let i = 0; i < carrito.length; i++) {
            for (let x = 0; x < carrito[i].length; x++) {
                articulo = carrito[i][x];
            }
        }
        
        let container = document.getElementById("modal")
        let div = document.createElement('div')
        div.innerHTML = `
        <p>Nombre: ${articulo.nombre}</p>
        <p>Precio: ${articulo.precio}</p>
        `
        container.appendChild(div)
    }
}

const productosNuevo = [
    new Producto(1, "Buzo", 120, "canary", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-canary.jpg"),
    new Producto(2, "Buzo", 120, "off-black", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-off-black.jpg"),
    new Producto(3, "Buzo", 120, "wood", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-wood.jpg"),
    new Producto(4, "Jogging", 90, "off-black", "El nuevo jogging está diseñado con una pernera recta más holgada y se actualiza con un tratamiento de logo flocado inspirado en los joggings atléticos antiguos. Un logotipo aterciopelado de Essentials Fear of God está en la pierna izquierda, y una etiqueta de goma de Essentials está cosida en el centro del frente.", "./img/jogging-off-black.jpg"),
    new Producto(5, "Jogging", 90, "wood", "El nuevo jogging está diseñado con una pernera recta más holgada y se actualiza con un tratamiento de logo flocado inspirado en los joggings atléticos antiguos. Un logotipo aterciopelado de Essentials Fear of God está en la pierna izquierda, y una etiqueta de goma de Essentials está cosida en el centro del frente.", "./img/jogging-wood.jpg"),
    new Producto(6, "Remera", 60, "off-black", "La remera se detalla con un logotipo de Essentials en un flocado de terciopelo tonal que recuerda a los uniformes atléticos antiguos. Una etiqueta de goma Essentials está cosida en el cuello trasero.", "./img/essential-off-black.jpg"),
    /* new Producto(7, "Remera", 60, "smoke", "La remera se detalla con un logotipo de Essentials en un flocado de terciopelo tonal que recuerda a los uniformes atléticos antiguos. Una etiqueta de goma Essentials está cosida en el cuello trasero.", "./img/essential-smoke.jpg"),
    new Producto(8, "Remera", 60, "wood", "La remera se detalla con un logotipo de Essentials en un flocado de terciopelo tonal que recuerda a los uniformes atléticos antiguos. Una etiqueta de goma Essentials está cosida en el cuello trasero.", "./img/essential-wood.jpg"), */
];

const producto = new Producto(); // instancia de clases, llamar para acceder a los metodos de la clase
producto.listarProductos();

const botonCompra = document.querySelectorAll(".btn-compra");

botonCompra.forEach(boton => {
    boton.addEventListener("click", (e) => {
        producto.agregarProductoCarrito(e.target.id)
    })
});

let contador = 0;

botonCompra.forEach(elemento => {
    elemento.addEventListener("click", () => {
        contador++
        carritoItemSuma.innerHTML = `${contador}`
    })

});

const btnCarrito = document.getElementById("btn-carrito");

btnCarrito.addEventListener("click", (e) => {
    e.preventDefault()
}) 





