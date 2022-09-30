/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash','Counter', 'Healing'];//Array de Strings

//Interface para establecer el comportamiento del objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;//Opcional ?
}

//Objeto plano, pero especificando el tipo de objeto a través de la interface Personaje
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';


console.table( personaje );
