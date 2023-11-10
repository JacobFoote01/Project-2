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
        console.log("logging out")
        req.session.destroy();
        console.log('destroyed')
        res.json({ success: true });
    }
}

export default handlerFunctions