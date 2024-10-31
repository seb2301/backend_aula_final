const pessoa = require("../models/pessoa");
const ModelPessoa = require("../models/pessoa");

// criando a classe servicePessoa
class ServicePessoa {
  async GetPessoas() {
    return ModelPessoa.findAll();
  }
  async CreatePessoa(name, password, email) {
    if (!name || !password || !email) {
      throw new Error("Preencha todos os campos");
    }
    // fazer verificações - se mandou o name
    return ModelPessoa.create({ name, password, email });
  }
  async UpdatePessoa(id, name, password, email) {
    // fazer verificações - se mandou o id e o name
    // return ModelPessoa.Update({ id, name, password, email}, { where: { id } })

    if (!id) {
      throw new Error("Pessoa inexistente");
    }
    const pessoa = await ModelPessoa.findByPk(id);
    if (!pessoa) {
      throw new Error("Pessoa inexistente");
    }
    pessoa.name = name || pessoa.name;
    pessoa.password = password || pessoa.password;
    pessoa.email = email || pessoa.email;
    pessoa.save();

    return pessoa;
  }
  async DeletePessoa(id) {
    // fazer verificações - se mandou o id
    if (!id) {
      throw new Error("Pessoa inexistente");
    }
    const pessoa = await ModelPessoa.findByPk(id);
    if (!pessoa) {
      throw new Error("Pessoa inexistente");
    }

    pessoa.destroy();
    return pessoa;
  }
}
module.exports = new ServicePessoa();
