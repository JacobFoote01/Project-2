import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'
import session from 'express-session'
import { Vehicle, User} from '../db/model.js'
import * as controller from '../server/controller.js'

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())
app.use(session({ secret: 'gandolf', saveUninitialized: false, resave: false}))

function loginRequired(req, res, next) {
    if (!req.session.userId) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      next();
    }
  }

//routes go here 

app.get('/server/vehicle', async (req, res) => {
    const allVehicle = await Vehicle.findAll();
    res.json(allVehicle);
  });

  app.get('/server/vehicle/:vehicleId', async (req, res) => {
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findByPk(vehicleId);
    res.json(vehicle);
  });

//to create
app.post('/server/auth', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
  
    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });

app.post('/server/logout', loginRequired, (req, res) => {
    req.session.destroy();
    res.json({ success: true });
  });

app.post('/server/logout', (req, res) => {
    if (!req.session.userId) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      req.session.destroy();
      res.json({ success: true });
    }
  });

//to delete
app.delete('/vehicle:id', controller.removeVehicle)

// for editing
app.put('/vehicle', controller.updateVehicle)

//door to the server 
ViteExpress.listen(app, 5173, () => console.log(`Welcome! Report to http://localhost:5173`))