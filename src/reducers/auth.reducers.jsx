import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false
}

const authRedu = (state = initState, action) => {

    console.log(action)

    switch(action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break
        case authConstants.LOGOUT_REQUEST:

            localStorage.clear()

            state = {
                ...initState
            }
            break
        default:
            return initState
    }

    return state

}

export default authRedu