const pessoa = require("../models/pessoa");
const ModelPessoa = require("../models/pessoa");
const bcrypt = require("bcrypt");
const SALT = 12;
const jwt = require("jsonwebtoken");

// criando a classe servicePessoa
class ServicePessoa {
  async GetPessoas() {
    return ModelPessoa.findAll();
  }
  async CreatePessoa(name, password, email) {
    if (!name || !password || !email) {
      throw new Error("Preencha todos os campos");
    }
    // fazer verificações - se mandou o name criptografar a senha
    const hashSenha = await bcrypt.hash(password, SALT);
    return ModelPessoa.create({ name, password: hashSenha, email });
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

    // let hashSenha = undefined;
    // if (password) {
    // hashSenha = await bcrypt.hash(password, SALT);
    //  }

    pessoa.name = name || pessoa.name;
    pessoa.password = password
      ? await bcrypt.hash(password, SALT)
      : pessoa.password;
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
  async Login(email, password) {
    if (!email || !password) {
      throw new Error("Email ou Senha inválida");
    }

    const pessoa = await ModelPessoa.findOne({ where: { email } });
    if (!pessoa) {
      throw new Error("Email ou Senha inválida");
    }
    const senhaValida = bcrypt.compareSync(password, pessoa.password);
    if (!senhaValida) {
      throw new Error("Email ou Senha inválida");
    }
    return jwt.sign({ id: pessoa.id }, "segredo", { expiresIn: 60 * 60 });
  }
}
module.exports = new ServicePessoa();
