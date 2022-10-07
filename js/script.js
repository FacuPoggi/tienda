/* let savedPass = '1234';
let savedUserName = 'Facundo';


function login() {
    let logged = false;
    for (let i = 4; i > 0; i--) {
        let nameUser = prompt('Ingresá tu nombre de usuario (Facundo)')
        let passUser = prompt('Ingresá tu contraseña (1234)')
        if (savedPass == passUser && savedUserName == nameUser) {
            alert('Bienvenido/a ' + nameUser)
            logged = true
            break;
        } else if (i == 1) {
            alert('Te enviaremos un email a tu correo electronico para restaurar tu contraseña')
        } else {
            alert('Usuario y/o contraseña incorrecta, volve a intentarlo, te quedan ' + (i - 1) + ' intentos.')
        }
    }
    return logged;
}

if (login()) {


    let clothesOptions = prompt('Elegi una prenda de ropa para comprar y le calculamos el iva: \n1 - Remera \n2 - Jean \n3 - Buzo \n4 - Campera \n5 - Zapatillas \nPresioná X para finalizar').toUpperCase()
    const iva = x => x * 0.21;

    while (clothesOptions != 'X') {

        switch (clothesOptions) {
            case '1':
                alert('El precio de la remera es $4300 mas el iva quedaria en $' + (iva(4300) + 4300));
                break;
            case '2':
                alert('El precio del jean es $6000 mas el iva quedaria en $' + (iva(6000) + 6000));
                break;
            case '3':
                alert('El precio del buzo es de $21000 mas el iva quedaria en $' + (iva(21000) + 21000));
                break;
            case '4':
                alert('El precio de la campera es de $30000 mas el iva quedaria en $' + (iva(30000) + 30000));
                break;
            case '5':
                alert('El precio de las zapatillas son de $28000 mas el iva quedaria en $' + (iva(28000) + 28000));
                break;
            default:
                alert('Elegiste una opcion incorrecta');
                break;
        }

        clothesOptions = prompt('Elegi una prenda de ropa para comprar y le calculamos el iva: \n1 - Remera \n2 - Jean \n3 - Buzo \n4 - Campera \n5 - Zapatillas \nPresioná X para finalizar')
    }

}

alert('Fin del codigo') */


class Videojuego {

    constructor(nombre, genero, fecha, modo, empresa, id) {
        this.nombre = nombre;
        this.genero = genero;
        this.fecha = parseInt(fecha);
        this.modo = modo;
        this.empresa = empresa;
        this.id = id;
    }


    asignarId(array) {
        this.id = array.length;
    }
}


const videojuegos = [
    new Videojuego("League of Legends", "MOBA", 2009, "Multiplayer", "Riot Games", 1),
    new Videojuego("Dota", "MOBA", 2003, "Multiplayer", "IceFrog", 2),
    new Videojuego("Dota 2", "MOBA", 2013, "Multiplayer", "Valve Corporation y IceFrog", 3),
    new Videojuego("Counter-Strike: Global Offensive", "Shooter", 2012, "Multiplayer", "Valve Corporation", 4),
    new Videojuego("Apex Legends", "Battle Royale", 2019, "Multiplayer", "Respawn Entertainment", 5),
    new Videojuego("Grand Theft Auto V", "Accion y Aventura, Juego de mundo abierto", 2013, "Singleplayer y Multiplayer", "Rockstar Games", 6),
    new Videojuego("Minecraft", "Supervivencia, Accion y Aventura, Sandbox", 2009, "Singleplayer y Multiplayer", "Mojang Studios", 7)

];


// Pedido de ingreso de juegos

let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa un nuevo juego a la lista: Nombre del juego, Género, Fecha de estreno, Modo de juego, Empresa. Separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    let datos = ingreso.split("/");
    const juegos = new Videojuego(datos[0], datos[1], datos[2], datos[3], datos[4])


    videojuegos.push(juegos);
    juegos.asignarId(videojuegos);
}

// fin de pedido

// ordenar el array

let criterio = prompt("Elegí un criterio deseado:\n1 - Nombre del juego (A - Z) \n2 - Nombre del juego (Z - A) \n3 - Fecha de publicacion (Mas viejo a más nuevo)")

function ordenar(criterio, array) {

    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case "1":
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre))
            return nombreAscendente;

        case "2":
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre))
            return nombreDescendente;

        case "3":
            return arrayOrdenado.sort((a, b) => a.fecha - b.fecha);

        default:
            alert("No es un criterio válido")
            break;
    }

}

// fin del ordenado

function crearStringResultado(array) {
    let info = "";
    array.forEach(elemento => {

        info += "Nombre del juego : " + elemento.nombre + "\nGénero: " + elemento.genero + "\nFecha de salida: " + elemento.fecha + "\nModo de juego: " + elemento.modo + "\nEmpresa que lo Desarrolló: " + elemento.empresa + "\n\n"

    });

    return info;
}


alert(crearStringResultado(ordenar(criterio, videojuegos)))

let juegoElegido = prompt("Escribí algun nombre de un juego para ver si lo tenemos en nuestro catalogo")

const filtrado = videojuegos.filter((juegos) => juegos.nombre.toLowerCase().includes(juegoElegido.toLowerCase()))

if (filtrado.legnth == 0) {
    alert("No encontramos ninguna coincidendia en nuestro catalogo")
} else {
    const imprimible = filtrado.map((juegos) => juegos.nombre)
    alert("Los juegos de nuestro catalogo son: \n" + imprimible.join("\n"))
}