const express = require("express")
const app = express()
const port = 3000

lista_users = []


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/get/users", (req, res) => {

    res.send(lista_users)

})








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})