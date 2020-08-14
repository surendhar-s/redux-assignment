const broadcastFirstName = (data) => {
    return {
        type: "ADD_FIRST_NAME",
        payload: data
    }
}

export default broadcastFirstName