const firstNameReducer = (state = null, action) => {
    let data = []
    switch (action.type) {
        case "ADD_FIRST_NAME":
            if (data.length === 0) {
                data.push(action.payload)
                return data
            }
            else {
                data[0].firstName = action.payload.name
                return data
            }
        default:
            break;
    }
    return data
}
export default firstNameReducer;