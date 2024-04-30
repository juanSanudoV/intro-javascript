const personajes = ['Goku', 'Vegeta','Trunks'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [, , p3] = personajes;
console.log(p3)

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numero] = retornaArreglo();
console.log(letras, numero)

// Tarea
// 1.- el primer valor de arr se llamara nombre
// 2.-se llamara setNombre
const stateey = (valor) => {
    return [valor, ()=> { console.log('Hola Mundo')}];
}
const [nombre,setNombre] = stateey('Goku');
console.log(nombre,setNombre())

