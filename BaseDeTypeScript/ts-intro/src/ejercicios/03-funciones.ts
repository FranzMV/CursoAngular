/*
    ===== Código de TypeScript =====
*/

//Recibe dos parámetos de tipo number. Devuelve un dato de tipo number.
function sumar(a: number, b:number): number {
    return a + b;
}

//Recibe dos parámetos de tipo number. Devuelve un dato de tipo number.
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

//Recibe 3 parámetos de tipo number, el tercero con valor 2 por defecto y otroNumero es un parámetro que puede ser opcional
//Orden de los parámetros: 1-Obligatorios, 2-Opcionales, 3-Con valor por defecto
// Devuelve un dato de tipo number.
function multiplicar( numero: number, otroNumero?: number, base:number = 2 ): number {
    return numero * base;
}


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

//Void - no devuelve nada
function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();


