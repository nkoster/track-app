import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { token: null }
        default: return state
    }
}

const clearErrorMessage = dispatch => _ => {
    dispatch({ type: 'clear_error', payload: '' })
}

const tryLocalSignin = dispatch => async _ => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackCreateScreen', {})
    } else {
        navigate('SigninScreen')
    }
}

const signup = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('TrackCreateScreen', {})
    } catch(err) {
        dispatch({ type: 'add_error', payload: `${email} already in use` })
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('TrackCreateScreen', {})
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong' })
    }
}

const signout = dispatch => async _ => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('SigninScreen')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
)
