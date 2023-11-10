import { Vehicle, User} from '../db/model.js'

const handlerFunctions = {
    allVehicles: async (req, res) => {
        const allVehicle = await Vehicle.findAll();
        res.json(allVehicle)
    },
    getVehicle: async (req, res) => {
        const { vehicleId } = req.params;
        const vehicle = await Vehicle.findByPk(vehicleId);
        res.json(vehicle);
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
      
        if (user && user.password === password) {
          req.session.userId = user.userId;
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.json({ success: true });
    },
    loggingOut: (req, res) => {
        if (!req.session.userId) {
          res.status(401).json({ error: 'Unauthorized' });
        } else {
          req.session.destroy();
          res.json({ success: true });
        }
      }
}

export default handlerFunctions