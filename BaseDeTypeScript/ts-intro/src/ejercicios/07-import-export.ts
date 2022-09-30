//Importación de la Interfaz Producto y la función calculaISV
import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

//Array de Productos
const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

//Llamada a la función calculaISV del script /06-desestructuracion-funcion
const [total, isv] = calculaISV( carritoCompras );

console.log( 'Total', total );
console.log( 'ISV', isv )


