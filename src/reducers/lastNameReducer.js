const lastNameReducer = (state = null, action) => {
    let data = []
    switch (action.type) {
        case "ADD_LAST_NAME":
            if (data.length === 0) {
                data.push(action.payload)
                return data
            }
            else {
                data[0].lastName = action.payload.name
                return data
            }
        default:
            break;
    }
    return data
}
export default lastNameReducer