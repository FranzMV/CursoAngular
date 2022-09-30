/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles 
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;//Desestructuramos las propiedades que nos interesan del objeto
const { autor } = detalles;//Para obtener el autor del objeto detalles


// console.log('El volumen actual de: ', volumen );
// console.log('El segundo actual de: ', segundo );
// console.log('La canción actual de: ', cancion );
// console.log('El autor es: ', autor );


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;//Desectruración de un array, lo importante es la posición de la misma

// console.log('Personaje 1:', p1 );
// console.log('Personaje 2:', p2 );
console.log('Personaje 3:', p3 );