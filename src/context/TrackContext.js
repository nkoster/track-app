import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch(action.type) {
        case 'fetchTracks':
            return action.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => async _ => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetchTracks', payload: response.data })
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/track', { name, locations })
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)
