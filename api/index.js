import e from "express";
import cors from "cors"


const app = e()

app.use(cors())
app.use(e.urlencoded({ extended: false }))
app.use(e.json())

const users = ["felipe", "jose", "andres"]
const messages = []


app.get("/", (req, res) => {

    res.send("hello world")
})


app.post("/register-user", (req, res) => {

    users.push(req.body.user)
    res.send({ user: req.body.user })
})


app.post("/register-message", (req, res) => {

    messages.push(req.body.message)
    res.send(req.body.message)

})

app.get("/users", (req, res) => {
    res.send({ users: users })
})


app.post("/messages", (req, res) => {
    console.log(req.body)
    let foundMessages = []
    let user1 = req.body.user1
    let user2 = req.body.user2
    messages.forEach(m => {
        if ((m.user1 == user1 && m.user2 == user2) || (m.user2 == user1 && m.user1 == user2)) {
            foundMessages.push(m)
        }
    })
    res.send({ messages: foundMessages })
})


app.listen(3000)