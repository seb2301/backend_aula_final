const ServicePessoa = require('../service/pessoa')


// Criando a classe controller da pessoa
class ControllerPessoa {
    // todas as funçoes do controller, recebem req, res
    GetPessoas(req, res) {
        // todas as funçoes do controller, tem try Catch
        try {
            const pessoas = ServicePessoa.GetPessoas()
            res.send({message: pessoas})
            
        } catch (error) {
            //todo o Cath vai ser assim
            res.status(500).send({message: error.message})
            
        }
    }
    CreatePessoa(req, res){
            try {
                const name = req.body.name
                const pessoa = ServicePessoa.CreatePessoa(req.body.name)
                res.send({message: pessoa})
                
            } catch (error) {
                //todo o Cath vai ser assim
                res.status(500).send({message: error.message})
                
            }
        }
    UpdatePessoa(req, res){
                try {
                    const id = req.params.id
                    const name = req.body.name
                    const pessoa = ServicePessoa.UpdatePessoa(req.params.id, req.body.name)
                    res.send({message: pessoa})
                    
                } catch (error) {
                    //todo o Cath vai ser assim
                    res.status(500).send({message: error.message})
                    
                }
            }
    DeletePessoa(req, res){
                    try {
                        const id = req.params.id
                        const pessoa = ServicePessoa.DeletePessoa(id)
                        res.send({message: pessoa})
                        
                    } catch (error) {
                        //todo o Cath vai ser assim
                        res.status(500).send({message: error.message})
                        
                    }
                }
    DeletePessoa(req, res){
                    try {
                        res.send({message: 'Funcionou!'})
                        
                    } catch (error) {
                        //todo o Cath vai ser assim
                        res.status(500).send({message: error.message})
                        
                    }
                }
        }

module.exports = new ControllerPessoa()