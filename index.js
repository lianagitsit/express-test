const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
let count = 0

const app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send(`<h1>Hello you!</h1>
        <a href="/place">Click!</a>`)
})

// app.get('/:name', (req, res) => {
//     // const name = req.query.name || "you"
//     const name = req.params.name
//     res.send(`<h1>Hello ${ name }</h1>
//         <a href="/place">Click!</a>`)
// })

app.get('/place', (req, res) => res.send(
    `<html>
        <h3>You are now at another place!</h3>
        <a href="/">Go back to the first place</a>
        <form action="/place2" method="post">
            <input type="text" name="message">
            <input type="submit" value="Submit">
        </form>
    </html>`
))

app.post('/place2', urlencodedParser, (req, res) => {
    console.log(req.body)
    const message = req.body.message

    count++;
    
    res.send(
        `<html>
            <h1>Here is the final place!</h1>
            <h3>Here is your message: ${ message }</h3>
            <p>This has been viewed ${ count } times!</p>
            <a href="/">Go back to the first place</a>
        </html>`
    )
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
