const initialState = {
    isSign: false,
    signupErr: ''
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "signupErr":
            state.signupErr = action.payload
            return { ...state, signupErr: state.signupErr.concat() }
            break

        case "signupSuccess":
                state.signupErr = ''
                return { ...state, signupErr: state.signupErr.concat() }
            break;
        default: return state
    }

}

export default Reducer