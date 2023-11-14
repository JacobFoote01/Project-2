import { Vehicle, User } from '../db/model.js'

const handlerFunctions = {
    allVehicles: async (req, res) => {
        const { user_id } = req.body
        const allVehicles = await Vehicle.findAll(user_id);
        res.json(allVehicles)
    },
    // getVehicle: async (req, res) => {
    //     const { vehicleId } = req.params;
    //     const vehicle = await Vehicle.findByPk(vehicleId);
    //     res.json(vehicle);
    // },
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
        const user = await User.findOne({ where: { email: email }})

        if(user) { 
            return(alert("This email already exists"))
        } else {
            const user = await User.create({ 
                email: req.body.email, 
                name: req.body.username, 
                password: req.body.password, 
            })
        }
        res.json({user})
    },
    addVehicle: async (req, res) => {
        console.log(req.body)
        const { user_id } = req.body
        const vehicle = await Vehicle.findOne({ where: { userId: user_id}})

        if(vehicle) {
            return(alert('This vehicle already exists'))
        } else {
            const vehicle = await Vehicle.create({
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
            })
        }
        res.json({vehicle})
    },
    sessionCheck: async (req, res) => {
        const { user_id } = req.session
        if(!user_id){
            res.json({ success: false })
            return
        }
        const user = await User.findOne({ where: { user_id: user_id }})
     
        if(user && user.userId === user_id) {
            req.session.userId = user.user_id;
            res.json({ success: true , user_id});
        } else {
          res.json({ success: false });
        }
    }

}

export default handlerFunctions