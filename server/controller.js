// function getVehicles(req, res) {
//     res.json()
// }

function addVehicle(req, res) {
    data.push({
        id: Math.floor(Math.random() * 100000000),
        ...req.body 
    })
    console.log(data)
    
    res.json(data)
}

function removeVehicle(req, res) {}

function updateVehicle(req, res) {}

export {
getVehicles,
addVehicle,
removeVehicle,
updateVehicle,   
}