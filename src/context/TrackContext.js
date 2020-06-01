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

const createTrack = _ => async (name, locations) => {
    await trackerApi.post('/track', { name, locations })
}

const deleteTrack = dispatch => async id => {
    try {
        await trackerApi.post('/delete', { id })
        try {
            const response = await trackerApi.get('/tracks')
            dispatch({ type: 'fetchTracks', payload: response.data })
        } catch (err) {
            console.log('error getting tracks', err.message)
        }
    } catch (err) {
        console.log('error deleting track', err.message)
    }
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack, deleteTrack },
    []
)
