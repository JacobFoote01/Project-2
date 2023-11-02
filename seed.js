import { Vehicle, Maintenance, Modifications, ToDo } from "./model.js"

await db.sync({ force: true})

const Jacob = await User.create({
    userId: 0, 
    email: "test@test.com", 
    password: "asdf" 
})
    
const Buck = await Vehicle.create({
    vehicleId: 0,
    make: "Geo",
    model: "Prizm",
    year: 1995,
})

const oilChange = await Maintenance.create({
    maintenanceId: 0,
    difficulty: 1,
})

const lower = await Modifications.create({
    modificationsId: 0,
    difficulty: 3,
})

const brakes = await ToDo.create({
    toDoId: 0,
    difficulty: 2,
    dueDate: 12_10_23,
})


console.log("DB seeded successfully!")
await db.close()