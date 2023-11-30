import { Vehicle, User, Maintenance, Modification, ToDo } from '../db/model.js'

const handlerFunctions = {
    allVehicles: async (req, res) => {
        const { user } = req.session
        try {
            const allVehicles = await Vehicle.findAll({where: {userId: user.userId}});
            res.json(allVehicles)
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
        
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
    getVehicle: async (req, res) => {
        const { vehicleId } = req.params;
        const vehicle = await Vehicle.findByPk(vehicleId);
        res.json(vehicle);
    }, 
    getMaintenance: async (req, res) => {
        const { vehicleId } = req.params
        const maintenance = await Maintenance.findAll({ where: { vehicleId: vehicleId }})
        res.json(maintenance)
    },
    getModification: async (req, res) => {
        const { vehicleId } = req.params
        const modification = await Modification.findAll({ where: { vehicleId: vehicleId }})
        res.json(modification)
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
        try {
          const { email } = req.body;
      
          // Check if the user already exists
          const existingUser = await User.findOne({ where: { email: email } });
      
          if (existingUser) {
            return res.json({ success: false, message: 'User already exists' });
          } else {
            // Create a new user
            const newUser = await User.create({
              email: req.body.email,
              name: req.body.username,
              password: req.body.password,
            });
      
            res.json({ success: true, user: newUser });
          }
        } catch (error) {
          console.error('Error creating user:', error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
      },      
    addVehicle: async (req, res) => {
        const { userId } = req.body
            const vehicle = await Vehicle.create({
                img: req.body.img,
                year: req.body.year,
                make: req.body.make,
                model: req.body.model,
                userId: req.body.userId,
            })

        res.json({vehicle})
    },
    addMaintenance: async (req, res) => {
        const maintenance = await Maintenance.create({
            img: req.body.img,
            name: req.body.name,
            difficulty: req.body.difficulty,
            vehicleId: req.body.vehicleId,
        })
        res.json({maintenance})
    },
    addModification: async (req, res) => {
        const modification = await Modification.create({
            img: req.body.img,
            name: req.body.name,
            difficulty: req.body.difficulty,
            vehicleId: req.body.vehicleId,
        })
        res.json({modification})
    },
    deleteVehicle: async (req, res) => {
        const { vehicleId } = req.params
        await Vehicle.destroy({ where: {vehicleId: vehicleId}})
        return res.json({ success: true })
    },
    deleteMaintenance: async (req, res) => {
        const { maintenanceId } = req.params
        await Maintenance.destroy({ where: {maintenanceId: maintenanceId}})
        return res.json({ success: true })
    },
    deleteModification: async (req, res) => {
        const { modificationId } = req.params
        await Modification.destroy({ where: {modificationId: modificationId}})
        return res.json({ success: true })
    },
    editVehicle: async (req, res) => {
        const { vehicleId } = req.params
        console.log(vehicleId)
        try {
            const vehicle = await Vehicle.findOne({ where: {vehicleId: vehicleId}})
            if(vehicle) {
                vehicle.update({
                    img: req.body.img,
                    year: req.body.year,
                    make: req.body.make,
                    model: req.body.model,
                })
                res.json({vehicle})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
        
    },
    sessionCheck: async (req, res) => {
        const { userId } = req.session
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
    },
}
export default handlerFunctions