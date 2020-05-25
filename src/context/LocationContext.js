import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_location':
            return { ...state, currentLocation: action.payload }
        default: return state
    }
}

const startRecording = dispatch => _ => {}
const stopRecording = dispatch => _ => {}
const addLocation = dispatch => location => {
    dispatch({ type: 'add_location', payload: location})
}

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)
