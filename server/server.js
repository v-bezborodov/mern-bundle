const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cors = require('cors')
// const app = express()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const db = require('./db.js')

//external routes
const postRouter = require('../routes/post.js')

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())



app.prepare().then(() => {
    const server = express()

    server.use('/api', postRouter)

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query)
    })

    server.get('/b', (req, res) => {
        return app.render(req, res, '/b', req.query)
    })

    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })



    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

