import { Vehicle, Maintenance, Modification, ToDo, User, db } from "./model.js"

console.log('Syncing database...')
await db.sync({ force: true})

console.log('Seeding database...')

const Jacob = await User.create({
    email: "jacob@test.com", 
    password: "asdf",
    name: "Jacob",
})
    
const Prizm = await Vehicle.create({
    make: "Geo",
    model: "Prizm",
    year: 1995,
    userId: 1,
})

const oilChange = await Maintenance.create({
    difficulty: 1,
    name: "oilChange",
    vehicleId: 1,
})

const lower = await Modification.create({
    difficulty: 3,
    name: "lower",
    vehicleId: 1,
})

const brakes = await ToDo.create({
    difficulty: 2,
    dueDate: 12_10_23,
    name: "brake job",
    vehicleId: 1,
})

console.log("DB seeded successfully!")
await db.close()