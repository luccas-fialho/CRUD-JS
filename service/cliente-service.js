const listaClientes = () => {
    
    return fetch('http://localhost:3000/profile') //Já faz um GET e retorna uma promise
    .then(resposta => {
        return resposta.json()
    })
    
    /* Antes do fetch, lidava-se com promise e httprequest da seguinte maneira */

    /* const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()

        http.open('GET', 'http://localhost:3000/profile')
        
        http.onload = () => {
            if(http.status >= 400) reject(JSON.parse(http.response))
            else resolve(JSON.parse(http.response))
        }

        http.send()
    })
    return promise */
}

export const clienteService = {
    listaClientes
}
