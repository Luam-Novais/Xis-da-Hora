const express = require("express")
const app = express()

const Usuario = require("./models/Usuario")
const Hamburguer = require("./models/Hamburguer")

const bcrypt = require("bcryptjs")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const chaveSecreta = "chaveSegura"

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){

        return res.status(401).json({ message: "Token não fornecido" })
    }

    const token = authHeader.split(" ")[1];

    try{

        const decoded = jwt.verify(token, chaveSecreta)
        req.user = decoded
        next()
    }catch(error){

        return res.status(401).json({ message: "Token inválido ou expirado" })
    }
}

app.post("/auth/registrar", async (req, res) =>{

    const { nome, email, senha, telefone, cep, endereco, cidade } = req.body

    const usuarioExiste = await Usuario.findOne({ where: { email }})

    if(usuarioExiste){

        return res.status(400).json({ message: "Email ja existente" })
    }

    try{

        const senhaHash = await bcrypt.hash(senha, 10)

        const novoUsuario = await Usuario.create({
    
            nome,
            email,
            senha: senhaHash,
            telefone,
            cep,
            cidade,
            endereco
        })

        const token = jwt.sign(

            { id: novoUsuario.id, nome: novoUsuario.nome },
            chaveSecreta,
            { expiresIn: "1h" }
        )

        return res.status(200).json({

            message: "Registro feito com sucesso",
            user: {
                id: novoUsuario.id,
                nome: novoUsuario.nome
            },
            token
        })
    } catch(error){

        res.send("Erro ao cadastrar usuario " + error)
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

                { id: usuarioExiste.id, nome: usuarioExiste.nome },
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

        console.log("Usuario não existe registre-se")
    }
})

app.post("/hamburguers", async (req, res) =>{

    try{

        console.log(req.body.nome)
        console.log(req.body.imagem)

        const { nome, ingredientes, valor } = req.body
        const imagem = req.file ? `/uploads/${req.file.filename}` : null // Caminho da imagem

        const novoHamburguer = await Hamburguer.create({

            nome,
            ingredientes,
            valor,
            imagem,
        })

        res.status(201).json(novoHamburguer)
    } catch(error){

        res.send(error)
    }
})

app.listen(3001, () =>{

    console.log("Rodando")
})