const listaClientes = () => {
    
    return fetch('http://localhost:3000/profile') //Já faz um GET e retorna uma promise
    .then(resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
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

const criaCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {

        if(resposta.ok){
            return resposta.body    
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`) //Já faz um GET e retorna uma promise
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar um cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
