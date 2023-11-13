import { Vehicle, User } from '../db/model.js'

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
    addUser: async (req, res) => {
        const { email } = req.body
        const user = await User.findOne({ where: { email: email } })

        if(user) { 
            return("This email already exists")
        }else{
            const user = await User.create({ 
                email: req.body.email, 
                name: req.body.username, 
                password: req.body.password, 
            })
        }
        res.json({user})
    },
    sessionCheck: async (req, res) => {
        const { user_id } = req.session
        const user = await User.findOne({ where: { user_id: user_id }})
        // This has to be the issue v. one of these is incorrect so it still renders the home page. 
        if(user && user.userId === user_id) {
            req.session.userId = user.user_id;
            res.json({ success: true });
        } else {
          res.json({ success: false });
        }
    }

}

export default handlerFunctions