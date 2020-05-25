import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch(action.type) {
        default: return state
    }
}

const startRecording = dispatch => _ => {}
const stopRecording = dispatch => _ => {}
const addLocation = dispatch => _ => {}

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)
