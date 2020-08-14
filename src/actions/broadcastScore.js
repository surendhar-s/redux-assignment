const broadcastScore = (data) => {
    return {
        type: "ADD_SCORE",
        payload: data
    }
}

export default broadcastScore