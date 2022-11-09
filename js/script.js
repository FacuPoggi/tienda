let carrito = [];


const btnLogin = document.querySelector('.btn-dark'),
    carritoItemSuma = document.getElementById('carrito-item-suma'),
    conjuntoDeProductos = document.querySelector('.conjunto-de-productos'),
    btnCompraModal = document.getElementById('btn-compra-modal'),
    btnCerrarModal = document.getElementById('btn-cerrar-modal');

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
})

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
        let container = document.getElementById("contenedor")
        let cardgroup = document.createElement('div')
        cardgroup.classList.add("card-group")
        container.appendChild(cardgroup)
        for (let i = 0; i < productosNuevo.length; i++) {
            let div = document.createElement('div')
            div.classList.add("card")
            div.innerHTML = ` 
            <img class="card-img-top img-cards" src="${productosNuevo[i].imagen}" class="card-img-top" alt="...">
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


        localStorage.setItem("carrito", JSON.stringify(carrito))

        carritoItemSuma.innerText = carrito.length

    }
}

const productosNuevo = [
    new Producto(1, "Buzo", 120, "canary", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-canary.jpg"),
    new Producto(2, "Buzo", 120, "off-black", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-off-black.jpg"),
    new Producto(3, "Buzo", 120, "wood", "El ajuste relajado del buzo con capucha de polar está diseñado con una silueta más voluminosa en el cuerpo y sin dobladillo en la cintura para brindar libertad de movimiento.", "./img/hoodie-wood.jpg"),
    new Producto(4, "Remera", 60, "off-black", "La remera se detalla con un logotipo de Essentials en un flocado de terciopelo tonal que recuerda a los uniformes atléticos antiguos. Una etiqueta de goma Essentials está cosida en el cuello trasero.", "./img/essential-off-black.jpg"),
    new Producto(5, "Jogging", 90, "off-black", "El nuevo jogging está diseñado con una pernera recta más holgada y se actualiza con un tratamiento de logo flocado inspirado en los joggings atléticos antiguos. Un logotipo aterciopelado de Essentials Fear of God está en la pierna izquierda, y una etiqueta de goma de Essentials está cosida en el centro del frente.", "./img/jogging-off-black.jpg"),
    new Producto(6, "Jogging", 90, "wood", "El nuevo jogging está diseñado con una pernera recta más holgada y se actualiza con un tratamiento de logo flocado inspirado en los joggings atléticos antiguos. Un logotipo aterciopelado de Essentials Fear of God está en la pierna izquierda, y una etiqueta de goma de Essentials está cosida en el centro del frente.", "./img/jogging-wood.jpg"),
];

const producto = new Producto();
producto.listarProductos();

const botonCompra = document.querySelectorAll(".btn-compra");

botonCompra.forEach(boton => {
    boton.addEventListener("click", (e) => {
        producto.agregarProductoCarrito(e.target.id)
        Toastify({
            text: "Agregaste un producto al carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            style: {
                background: "black",
            }
        }).showToast()
    })
});

const btnCarrito = document.getElementById("btn-carrito");

btnCarrito.addEventListener("click", (e) => {
    e.preventDefault()
})


btnCompraModal.addEventListener("click", () => {
    localStorage.clear()
    Swal.fire({
        position: 'center',
        title: 'Gracias por tu compra', 
        showConfirmButton: false,
        timer: 1000
        })
    })



    btnCerrarModal.addEventListener("click", () => {
    window.location.reload()
})
