// Condicional
// Ciclo
// Funciones

let product;
let priceProduct;
const iva = x => x * 0.21;
let savedPass = '1234';
let savedUserName = 'Facundo';
let contador = 3;
let cicloWhile = true


function login() {
    for (let i = 4; i > 0; i--) {
        let nameUser = prompt('Ingresá tu nombre de usuario (Facundo)')
        let passUser = prompt('Ingresá tu contraseña (1234)')
        if (savedPass == passUser && savedUserName == nameUser) {
            alert('Bienvenido/a ' + nameUser)
            return contador = true
        } else if (i == 1) {
            alert('Te enviaremos un email a tu correo electronico para restaurar tu contraseña')
        } else {
            alert('Usuario y/o contraseña incorrecta, volve a intentarlo, te quedan ' + ( i - 1 ) + ' intentos.')
        }
    }
}
login();


if (contador == true) {
    alert('hola')
}

