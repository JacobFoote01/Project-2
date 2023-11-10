import { Vehicle, Maintenance, Modifications, ToDo, User } from "./model.js"
import { db } from "./model.js"

await db.sync({ force: true})

const Jacob = await User.create({
    email: "jacob@test.com", 
    password: "asdf",
    name: "Jacob",
})
    
const Buck = await Vehicle.create({
    make: "Geo",
    model: "Prizm",
    year: 1995,
})

const oilChange = await Maintenance.create({
    difficulty: 1,
    name: "oilChange",
})

const lower = await Modifications.create({
    difficulty: 3,
    name: "lower",
})

const brakes = await ToDo.create({
    difficulty: 2,
    dueDate: 12_10_23,
    name: "brake job"
})


console.log("DB seeded successfully!")
await db.close()