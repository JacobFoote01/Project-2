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
    img:"https://i.ytimg.com/vi/CnU8RgpI-30/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBMgOih_MA8=&rs=AOn4CLAEU-My4qFoBeb3ojxtLz_j8CSX1Q",
    make: "Geo",
    model: "Prizm",
    year: 1995,
    userId: 1,
})

const oilChange = await Maintenance.create({
    img:"https://d26qplkpp6t30l.cloudfront.net/wp-content/uploads/2019/01/22092032/oil-change-explained.jpg",
    difficulty: 1,
    name: "oilChange",
    vehicleId: 1,
})

const lower = await Modification.create({
    img:"https://images.fitmentindustries.com/buy2-compressed/web/36455-1-bc-racing-br-series-coilovers-jzs160-161.jpg",
    difficulty: 3,
    name: "lower",
    vehicleId: 1,
})

const brakes = await Maintenance.create({
    img:"https://www.motorcraft.com/content/dam/ford-motorcraft/en_us/motorcraft_global/products/product_categories/Brakes_Desktop.png.renditions.original.png",
    difficulty: 2,
    dueDate: 12_10_23,
    name: "brake job",
    vehicleId: 1,
})

const brakeJob = await ToDo.create({
    difficulty: 2,
    dueDate: 12_10_23,
    name: "brake job",
    vehicleId: 1,
})

console.log("DB seeded successfully!")
await db.close()