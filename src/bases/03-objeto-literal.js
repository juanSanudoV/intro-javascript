const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 6456434664,
        lat: 14.12481,
        lng: 34.9247255
    }
}

// console.table(persona)
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2)