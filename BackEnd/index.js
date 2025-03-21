const express = require("express")
const app = express()
const Usuario = require("./models/Usuario")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const cors = require("cors")

app.use(cors())
app.use(session({

    secret: "!@#$qwer1234",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/registrar", async (req, res) =>{

    const { nome, email, senha, telefone, cep, endereco, cidade } = req.body

    const senhaHash = await bcrypt.hash(senha, 10)

    try{

        await Usuario.create({

            nome,
            email,
            senha: senhaHash,
            telefone,
            cep,
            cidade,
            endereco
        })

        res.redirect("/")

        console.log(req.body)
    }catch(error){

        res.send("Erro ao registrar usuário " + error)
    }
})

app.listen(3001, () =>{

    console.log("Rodando")
})