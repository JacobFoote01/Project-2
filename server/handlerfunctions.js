import { Vehicle, User } from '../db/model.js'

const handlerFunctions = {
    allVehicles: async (req, res) => {
        const { user } = req.session

        try {
            console.log(req.session)
            const allVehicles = await Vehicle.findAll({where: {userId: user.userId}});
            res.json(allVehicles)
        } catch (error) {
            console.log(error)
        }

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
          req.session.user = user;

          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.json({ success: true });
    },
    getUser: async (req, res) => {
        const {user} = req.session
        if(!user) {
            res.json({ success: false })
            return
        } 
        res.json({ success: true, user })
    },
    addUser: async (req, res) => {
        const { email } = req.body
        const user = await User.findOne({ where: { email: email }})

        if(user) { 
            return res.json({ success: false })
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
        const { userId } = req.body


            const vehicle = await Vehicle.create({
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
                userId: req.body.userId,
            })

        res.json({vehicle})
    },
    sessionCheck: async (req, res) => {
        const { userId } = req.session

        console.log(req.session)


        if(!userId){
            res.json({ success: false, userId })
            return
        }
        const user = await User.findOne({ where: { userId: userId }})
     
        if(user && user.userId === userId) {
            req.session.userId = user.userId;
            res.json({ success: true , userId});
        } else {
          res.json({ success: false });
        }
    }

}

export default handlerFunctions