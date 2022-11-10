let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const carritoItemSuma = document.getElementById('carrito-item-suma'),
    btnCompraModal = document.getElementById('btn-compra-modal'),
    btnCarrito = document.getElementById("btn-carrito");



class Producto {
    constructor(id, nombre, precio, color, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }


    //Crea los productos de forma dinamica en el html
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
                <p class = "card-title">$${productosNuevo[i].precio}</p>
                <button id="${productosNuevo[i].id}" type="button" class="btn-compra btn btn-dark">Comprar</button>
                `;
            cardgroup.appendChild(div)
        }
    }
    // Crea los productos en el carrito
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

        localStorage.setItem('carrito', JSON.stringify(carrito));



        carritoItemSuma.innerText = carrito.length

    }
    // Guarda los productos del carrito en LocalStorage
    guardarCarrito() {
        carrito.forEach(producto => {
            let container = document.getElementById("modal")
            let div = document.createElement('div')
            div.innerHTML = `
            <p>Nombre: ${producto[0].nombre}</p>
            <p>Precio: ${producto[0].precio}</p>
            `
            container.appendChild(div)
            carritoItemSuma.innerText = carrito.length
        });
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
producto.guardarCarrito();

const botonCompra = document.querySelectorAll(".btn-compra");

//Agrega los productos en el carrito
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

//Se utiliza para que no se recargue la pagina de forma automatica al entrar al modal del carrito
btnCarrito.addEventListener("click", (e) => {
    e.preventDefault()
})

const btnSwal = document.querySelector('.swal2-confirm')

btnCompraModal.addEventListener("click", () => {
    localStorage.clear()
    Swal.fire({
        position: 'center',
        title: '¡Gracias por tu compra!',
        showConfirmButton: false,
        timer: 1800,
        allowOutsideClick: false
    })
    //Sirve para que se recargue la pagina y asi se borre el LS del carrito.
    setTimeout(() => {
        window.location.reload()
    }, 2000);

})

// Funcion para poder agregar "proximos productos" consumiendo la informacion desde un .json con fetch
function cargarProducto() {
    fetch("./js/proximosProductos.json").then((respuesta) => {
        return respuesta.json()
    }).then((data) => {
        let proximoProd = '';
        data.forEach((productos) => {
            proximoProd += `
            <div class= "divPadre">
                <div class = "proximosProd">
                    <img id="imgProximo" src="${productos.imagen}" alt="...">
                    <h5 class="tituloProximo">${productos.nombre}</h5>
                    <hr>
                    <p class="descripcionProximo">${productos.descripcion}</p>
                    <p class = "tituloProximo">$${productos.precio}</p>
                    <button id="${productos.id}" class="btn-proximamente" type="button">Proximamente
                    </button>
                    </div>
                </div>`
        })
        document.getElementById('nuevosProductos').innerHTML = proximoProd
    })
}
cargarProducto()
