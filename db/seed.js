import { Vehicle, Maintenance, Modifications, ToDo, User } from "./model.js"
import { db } from "./model.js"

await db.sync({ force: true})

const Jacob = await User.create({
    email: "test@test.com", 
    password: "asdf" 
})
    
const Buck = await Vehicle.create({
    make: "Geo",
    model: "Prizm",
    year: 1995,
})

const oilChange = await Maintenance.create({
    difficulty: 1,
})

const lower = await Modifications.create({
    difficulty: 3,
})

const brakes = await ToDo.create({
    difficulty: 2,
    dueDate: 12_10_23,
})


console.log("DB seeded successfully!")
await db.close()