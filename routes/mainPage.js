const app = require("express").Router()
const client = require('../db')
const coinList = require('../views/coinList')
const coinDetails = require('../views/coinDetails')

module.exports = app


const baseQ = "SELECT posts.*, coin.name, counting.votes FROM posts INNER JOIN coin ON coin.id = posts.coinId LEFT JOIN(SELECT posts.Id, COUNT(*) as votes FROM votes GROUP BY postId) AS counting ON posts.id = counting.postId\n "


// app.use(express.static("public"))
app.get('/', async (req, res, next) => {
    try {
        const data = await client.query(baseQ)
        res.send(coinList(data.rows))

    }catch (error) {
        next(error)
    }
})

app.post('/', async (req, res, next) => {
//     try {
//         let coinResponse = await client.query(`SELECT * FROM coin WHERE name = $1`, [req.body.name]);
    
//     if(coinResponse.rows.length === 0) {
//         coinResponse = await client.query(`INSERT INTO coin(name) VALUES ($1) RETURNING *;`, [req.body.name])}
    
//     const postResponse = await client.query(` INSERT INTO posts(coinId, title, content) values ($1,, $2, $3) RETURNING *;`, [coinResponse.rows[0].id, req.body.title, req.body.content])
//     res.redirect(`/mainPage/${postResponse.rows[0].id}`)
// }
// catch(ex) {
//     next(ex)
})

app.get('/:id', async (req, res, next) => {
    try {
        const data = await client.query(baseQ + "WHERE posts.id = $1", [req.params.id])
        const post = data.rows[0]
        res.send(coinDetails(post));
    } catch(error) {
        next(error)
    }
})

