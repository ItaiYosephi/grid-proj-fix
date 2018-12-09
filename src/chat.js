export default {
    state: {
        counter: 0
    },
    mutations : {
        setCounter(state, payload) {
            state.counter+= payload.value

        }
    }
}