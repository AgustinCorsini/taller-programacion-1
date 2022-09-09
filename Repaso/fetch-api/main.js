//creamos un objeto
//json

let datos_personales={
    nombre:'pepito',
    apellido:'rodriguez',
    dni: 44987654,
    correos:{
        gmail: 'pepito@gmail.com',
        outlook: 'pepis@outlook.com',
        yahoo: 'pepe@yahoo.com.ar',
    },
    edad: 25

}

//forma 2- destructuring object
const{gmail,yahoo,oulook} = datos_personales.correos
console.log(`
    Gmail: ${gmail}
    Outlook: ${outlook}
    yahoo: ${yahoo}
`)

//consumo de api
//funcion asincrona (se agrega async abtes de function)
async function consumir_api(){
    //realiza por defecto una solicitud http a traces del metodo get
    let publicaciones = await fetch('https_//jsonplaceholder.typicode.com/posts')
}