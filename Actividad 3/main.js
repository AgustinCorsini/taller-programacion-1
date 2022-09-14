async function generar_tabla()
{
    //se ingresa la api
    let datos = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    let comentarios = await datos.json()

    let filas = []
    //se toman los datos de los elementos seleccionados de la api
    comentarios.forEach(element => {
        
        let fila =`
        <tr>
            <td>${element.symbol}</td>
            <td>${element.name}</td>
            <td><img style="width: 4rem" src="${element.image}"></td>
            <td>${element.current_price}</td>
        </tr>
        `

        filas.push(fila)
    });

    document.getElementById("cuerpo").innerHTML = filas.join('')
    
}
generar_tabla()