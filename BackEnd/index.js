const express = require("express")
const app = express()
const Usuario = require("./models/Usuario")
const bcrypt = require("bcryptjs")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const chaveSecreta = "chaveSegura"

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/auth/registrar", async (req, res) =>{

    const { nome, email, senha, telefone, cep, endereco, cidade } = req.body

    const emailExistente = await Usuario.findOne({ where: { email }})

    if(!emailExistente){

        try{

            const senhaHash = await bcrypt.hash(senha, 10)

            await Usuario.create({
    
                nome,
                email,
                senha: senhaHash,
                telefone,
                cep,
                cidade,
                endereco
            })
        }catch(error){
    
            res.send("Erro ao registrar usuário " + error)
        }
    } else{ 

        console.log("Email já existente")
    }    
})

app.post("/auth/login", async (req, res) =>{

    const { email, senha } = req.body

    const usuarioExiste = await Usuario.findOne({ where: { email }})

    if(usuarioExiste){

        const senhaCompativel = await bcrypt.compare(senha, usuarioExiste.senha)
      
        if(senhaCompativel){

            console.log("Login feito com sucesso")

            const token = jwt.sign(
                { id: usuarioExiste.id, nome: usuarioExiste.nome},
                chaveSecreta,
                { expiresIn: "1h" }
            )

            return res.status(200).json({

                message: "Login bem-sucedido!",
                user: {
                    id: usuarioExiste.id,
                    nome: usuarioExiste.nome
                },
                token
            })
        } else{

            console.log("Senha incorreta")
        }
    } else{

        console.log("Usuario não existe")
    }
})

app.listen(3001, () =>{

    console.log("Rodando")
})