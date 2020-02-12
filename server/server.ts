import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';

// const next = require('next')
import next from 'next'
// const bodyParser = require('body-parser')
// const cors = require('cors')
const server = express()



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


function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.path}`)
    next()
}

function setHeader(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
}


app.prepare().then(() => {
    // const server = express()
    server.use(bodyParser.json())
    server.use(loggerMiddleware);
    // server.use(setHeader);

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query)
    })

    server.get('/b', (req, res) => {
        return app.render(req, res, '/b', req.query)
    })

    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.use('/api', postRouter)

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

