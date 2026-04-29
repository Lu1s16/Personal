const express = require("express")
const app = express()
const port = 3000

let lista_users = []

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/get/users", (req, res) => {

    res.send(lista_users)

})

app.post("/post/users", (req, res) => {

    const ID  = req.body.ID
    const nombre = req.body.Nombre
    const edad = req.body.Edad 



    lista_users.push({"ID": ID, "Nombre": nombre, "Edad": edad})


    res.send("Usuario agregado")



})








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})