import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
import session from 'express-session'
import handlerFunctions from './handlerfunctions.js'


const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())
app.use(session({ secret: 'gandolf', saveUninitialized: false, resave: false}))

function loginRequired(req, res, next) {
    if (!req.session.userId) {
      res.json({ error: 'Unauthorized', success: false });
    } else {
      next();
    }
  }

//routes go here 

app.get('/server/vehicles', handlerFunctions.allVehicles);

// app.get('/server/vehicle/:vehicleId', handlerFunctions.getVehicle);

app.get('/server/logout', loginRequired, handlerFunctions.logout)

app.get('/server/sessionCheck', handlerFunctions.sessionCheck)

app.post('/server/auth', handlerFunctions.login);

app.post('/server/addUser', handlerFunctions.addUser)

app.post('/server/addVehicle', handlerFunctions.addVehicle)

//to delete
// app.delete('/vehicle:id', .removeVehicle)

// for editing
// app.put('/vehicle', .updateVehicle)

ViteExpress.listen(app, 5173, () => console.log(`Welcome! Report to http://localhost:5173`))