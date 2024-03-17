import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123aleka123',
    database: 'test'
})

app.get("/", (req, res) => {
    res.json("Hello this is backend")
})

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/users/:id", (req, res) => {
    const userID = req.params.id
    const q = "SELECT * FROM users WHERE id = ?"

    db.query(q, [userID], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/new-user", (req, res) => {
    const q = "INSERT INTO users (`name`, `gender`, `avatar`, `email`, `status`, `transaction`, `username`, `title`, `address`, `phone`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.gender,
        req.body.avatar,
        req.body.email,
        req.body.status,
        req.body.transaction,
        req.body.username,
        req.body.title,
        req.body.address,
        req.body.phone,
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been created")
    })
})

app.put("/users/:id", (req, res) => {
    const userID = req.params.id
    const q = 'UPDATE users SET `name` = ?, `avatar` = ?, `email` = ?, `status` = ?, `transaction` = ?, `username` = ?, `title` = ?, `address` = ?, `phone` = ? WHERE id = ?'
    const values = [
        req.body.name,
        req.body.avatar,
        req.body.email,
        req.body.status,
        req.body.transaction,
        req.body.username,
        req.body.title,
        req.body.address,
        req.body.phone,
    ]
    db.query(q, [...values, userID], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been updated")
    })
})

app.delete("/users/:id", (req, res) => {
    const userID = req.params.id
    const q = 'DELETE FROM users WHERE id = ?'

    db.query(q, [userID], (err, data) => {
        if (err) return res.json(err)
        return res.json("User has been deleted")
    })
})

app.listen(8801, () => {
    console.log('Welcome to backend')
})