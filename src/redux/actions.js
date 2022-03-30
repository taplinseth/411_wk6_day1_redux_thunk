const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch (url)
        .then(res => res.json())
        .then(res => {
            const action = {
                type: 'FETCH_MAKES',
                value: res.Results
            }
            dispatch(action)
        })
    }
}