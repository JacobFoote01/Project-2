function getVehicles(req, res) {
    res.json()
}

function addVehicle(req, res) {
    data.push({
        id: Math.floor(Math.random() * 100000000),
        ...req.body 
    })
    console.log(data)
    
    res.json(data)
}

function removeVehicle(req, res) {
    const { id } = req.params

    data = data.filter((vehicle) => {
        return vehicle.id !== Number(id)
    })
    res.json(data)
}

function updateVehicle(req, res) {
    data = data.map((vehicle) => {
       if (task.id === Number(req.body.id)) {
           return req.body
       }
       return vehicle
    })

    console.log(req.body)
    console.log(data)


    res.json(data)
}

export {
getVehicles,
addVehicle,
removeVehicle,
updateVehicle,   
}