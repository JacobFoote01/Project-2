import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

const app = express()
const port = '5173'
ViteExpress.config({ printViteDevServerHost}) 

function App() {
  return 
}


export default App

// const sequelize = require('./config') 

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.')
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database:')
//   })