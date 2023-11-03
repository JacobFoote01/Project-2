import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

// import * as controller from './controller.js'


const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())


//routes go here 
// app.get()

// app.post()

// app.delete()

// app.put()

//door to the server 
ViteExpress.listen(app, 5173, () => 
console.log(`Welcome! Report to http://localhost:5173`)
)