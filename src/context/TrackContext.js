import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => _ => {}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/track', { name, locations })
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)
