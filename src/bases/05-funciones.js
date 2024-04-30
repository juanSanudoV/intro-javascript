//Funciones en JS
// const saludar = function(nombre){
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}
const saludar3 = nombre =>`Hola, ${nombre}`
const saludar4 = () =>`Hola, Mundo`


console.log(saludar2())
console.log(saludar3('vegeta'))
console.log(saludar4())


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUser()
console.log(user)

//Tarea
//transformar a funciond de flecha
//Tiene que retornar un objeto implicito
//pruebas
const getUsuarioActivo = (nombre)=>(
    {
        uid: 'ABC567',
        username: nombre
    }
)

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)