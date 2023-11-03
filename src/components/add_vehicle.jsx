
function AddVehicle() {
    console.log('I have reached add_vehicle')
    return (
        <>
            <p>
                <input type="text" name="Year" aria-label="Year">Year</input>
                <input type="text" name="Make" aria-label="Make">Make</input> 
                <input type="text" name="Model" aria-label="Model">Model</input> 
                <button name="save">Save</button>
            </p>
        </> 
    )
}
export default AddVehicle