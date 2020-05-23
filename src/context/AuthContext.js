import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default: return state
    }
}

const signup = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        console.log(response)
    } catch(err) {
        dispatch({ type: 'add_error', payload: `${email} already in use` })
    }
}

const signin = dispatch => {
    return ({ email, password }) => {

    }
}

const signout = dispatch => {
    return ({ email, password }) => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '' }
)
