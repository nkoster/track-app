import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type) {
        default: return state
    }
}

// const signup = dispatch => {
//     console.log('DEBUG')
//     return async ({ email, password }) => {
//         console.log('DEBUG II')
//         try {
//             const response = await trackerApi.post('/signup', { email, password })
//             console.log(response)
//         } catch(err) {
//             console.log(err.message)
//         }
//     }
// }

const signup = async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        console.log(response)
    } catch(err) {
        console.log(err.response.data)
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
    { isSignedIn: false }
)
