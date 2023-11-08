import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
// import session from 'express-session'
// import * as controller from './controller.js'


const app = express()
const port = '5173'

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())
// app.use(session({ secret: 'sshh', saveUninitialized: true, resave: false}))


//routes go here 
// app.get('/', async (req, res) => {})

//to create
// app.post()

//to delete
// app.delete('/')

// for editing
// app.put()

//door to the server 
ViteExpress.listen(app, port, () => console.log(`Welcome! Report to http://localhost:5173`))