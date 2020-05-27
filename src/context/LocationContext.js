import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'start_recording':
            return { ...state, recording: true }
        case 'stop_recording':
            return { ...state, recording: false }
        case 'add_location':
            console.log(state.locations.length)
            return { ...state, locations: [...state.locations, action.payload] }
        case 'change_name':
            return { ...state, name: action.payload }
        default: return state
    }
}

const changeName = dispatch => name => {
    dispatch({ type: 'change_name', payload: name })
}

const startRecording = dispatch => _ => {
    dispatch({ type: 'start_recording' })
}

const stopRecording = dispatch => _ => {
    dispatch({ type: 'stop_recording' })
}

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location })
    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }
}

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName },
    { name: '', recording: false, locations: [], currentLocation: null }
)
