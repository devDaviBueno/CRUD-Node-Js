let clientes = [
    {id: 1, name: "André", age: 60},
    {id: 2, name: "João", age: 20},
    {id: 3, name: "Davi", age: 10},
    {id: 4, name: "Gabriel", age: 30}
]

class CustumersController {
    index(req, res){
        return res.json(clientes)
    }
    show(req, res){
        try{
            const id = parseInt(req.params.id)
            const clienteId = clientes.find(item => item.id === id)
            const status = clienteId ? 200 : 404
            if(status === 404){
                throw new ERROR("usuario n existe")
            }
            return res.status(status).json(clienteId)
        }catch(error){
            console.log(error.message)
        }
  
    }
    create(req, res){
        const {name, age} = req.body
        const id = clientes[clientes.length -1].id +1
        
        const NewClient = {id, name, age}
        clientes.push(NewClient)
        return res.status(201).json(NewClient)
    }
    uptade(req, res){
        const id = parseInt(req.params.id)
        const {name, age} = req.body
        const IdClient = clientes.findIndex(i => i.id === id)    
        const status = IdClient >= 0 ? 200 : 404
        if (IdClient >= 0){
            clientes[IdClient] = {id: parseInt(id), name, age}
        }
        return res.status(status).json(clientes[IdClient])
    }
    destroy(req, res){
        const id = parseInt(req.params.id)
        const IdCliente = clientes.findIndex(i => i.id === id)
        const status = IdCliente >= 0 ? 200 : 404
        if (IdCliente >= 0){
            clientes.splice(IdCliente, 1)
        }
        return res.status(status).json()
    }

}

export default new CustumersController