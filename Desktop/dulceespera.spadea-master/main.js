let producto = ''
let precio = 0;
let cantidad = 0;
let total = 0;
let continuarComprando = false;

do{
    producto = prompt ('Que producto queres comprar?');
    cantidad = parseInt(prompt('cuantos queres comprar?'))

    let cantidadValidada = validarCantidad(cantidad);

    switch (producto) {
        case 'manta':
            precio = 2500;            
            break;
        case 'nidito':
            precio = 4500;            
            break;
        case 'cambiador':
            precio = 3000;            
            break;
            case 'cambiador de paseo':
            precio = 5000;            
            break
        default:
            alert('un dato es incorrecto');
            precio = 0
            cantidad = 0
            break;      
    }
    totalDeCompra += precio * cantidadValidada;
    cantidadTotal += cantidad;
    continuarComprando = confirm('Queres agregar mas productos?');
} while (continuarComprando)

function validarCantidad(cantidad){
    while (Number.isNaN(cantidad) || cantidad === 0){
        if (cantidad !==0){
            alert('Debe agregar un numero')
        } else {
            alert('Ingrese un numero distinto a cero')
        }
        cantidad = parseInt(prompt('Cuantos desea comprar'));
    }
    return cantidad;  
    }
    function calcularEnvio(totalCompra) {
        let envioADomicilio = confirm('Queres envio a domicilio');
    if (envioADomicilio && totalCompra >= 5000) {
        alert('el envio será gratis. El total de tu compra es: +totalCompra');
        
    }
    let nombre = prompt ('ingrese su nombre y apellido:');

    }
comprarProductos();
