

//Desestruturacion
//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


// const {nombre,edad,clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)


const Contexto = ({ nombre, edad, rango= 'CAPITOLIO'})=>{

    //console.log(nombre,edad,rango);
    return{
        nombreClave: nombre,
        anios: edad,
            latlng:{
                lat: 14.1232,
                lng: -12.3232
            }
        
    }
}
const {nombreClave, anios, latlng:{lat,lng}} = Contexto(persona)

console.log(nombreClave,anios)
console.log(lat,lng)

