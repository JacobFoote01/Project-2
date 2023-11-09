const BASE_URL ='http://localhost:5173'

async function getVehicle() {
    try {
  
      const response = await fetch(`${BASE_URL}/vehicle`)
      return await response.json()
    } catch (error) {
      console.log(error)
    }
}

async function addVehicle(vehicles) {
    const response = await fetch(`${BASE_URL}/vehicle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(vehicles)
    })
    const json = await response.json()
  return json;
}

async function removeVehicle(id) {
    const response = await fetch(`${BASE_URL}/Vehicle/${id}`, {
      method: 'DELETE',
    })
    return await response.json()
  }

async function updateVehicle(task) {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    return await response.json()
  }

  export default { getVehicle, addVehicle, removeVehicle, updateVehicle }