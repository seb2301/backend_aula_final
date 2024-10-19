const ModelPessoa = require('../models/pessoa')

// criando a classe servicePessoa
class ServicePessoa {

    GetPessoas() {
        return ModelPessoa.GetPessoas()
    }
    CreatePessoa(name) {
        return ModelPessoa.CreatePessoa(name)
    }   
    UpdatePessoa(id, name) {
        return ModelPessoa.UpdatePessoa(id, name)
    }
    DeletePessoa(id) {
        return ModelPessoa.DeletePessoa(id)
    }
}
module.exports = new ServicePessoa()