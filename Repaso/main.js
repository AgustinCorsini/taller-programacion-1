let helados = ['Banana Split','Menta Granizada','Cereza','Dulce de Leche','Maracuya','Vainilla','Frutos Rojos','Pistacho']


//como obtener longitud de un arreglo
let longitud = helados.length
console.log("longitud: "+longitud)

//como obtener el ultimo elemento de un arreglo
let ultimo = helados[longitud-1]
console.log("ultimo elemento: "+ultimo)


//como agrego un elemento al final de un arreglo
helados.push('Crema Rusa')
console.log(helados)


//como elimino el ultimo elemento de un arreglo
helados.pop()
console.log(helados)


//como agrego un elemento al inicio de un arreglo
helados.unshift('Marroc')
console.log(helados)


//como eliminar el primer elemento de un arreglo
helados.shift()
console.log(helados)


//como obtener el indice(posicion) de un elemento
let indice_cereza = helados.indexOf('Cereza')
console.log('Indice de Cereza: '+indice_cereza)
console.log(helados[indice_cereza]) 


//como elimino un elemento conociendo su indice
helados.splice(indice_cereza,1)
console.log(helados)


//como eliminar mas de un elemento conociendo su indice
helados.splice(indice_cereza,2)
console.log(helados)


//como agrego mas de un elemento dentro del arreglo
helados.splice(1, 0,'Dulce de Leche')
console.log(helados)