const scoreReducer = (state = null, action) => {
    let data = []
    switch (action.type) {
        case "ADD_SCORE":
            if (data.length === 0) {
                data.push(action.payload)
                return data
            }
            else {
                data[0].score = action.payload.score
                return data
            }
        default:
            break;
    }
    return data
}
export default scoreReducer