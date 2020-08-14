const broadcastLastName = (data) => {
    return {
        type: "ADD_LAST_NAME",
        payload: data
    }
}

export default broadcastLastName