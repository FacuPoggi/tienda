let savedPass = '1234';
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


    let clothesOptions = prompt('Elegi una prenda de ropa para comprar y le calculamos el iva: \n1 - Remera \n2 - Jean \n3 - Buzo \n4 - Campera \n5 - Zapatillas \nPresioná X para finalizar')
    const iva = x => x * 0.21;

    while (clothesOptions != 'X' && clothesOptions != 'x') {

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

alert('Fin del codigo')

