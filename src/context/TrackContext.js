import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch(action.type) {
        case 'fetchTracks':
            return action.payload
        case 'deleteTrack':
            return state.filter(item => item._id !== action.payload)
        default:
            return state
    }
}

const fetchTracks = dispatch => async _ => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetchTracks', payload: response.data })
}

const createTrack = _ => async (name, locations, distance, duration) => {
    await trackerApi.post('/track', { name, locations, distance, duration })
}

const deleteTrack = dispatch => async id => {
    try {
        await trackerApi.post('/delete', { id })
        dispatch({ type: 'deleteTrack', payload: id})
    } catch (err) {
        console.log('error deleting track', err.message)
    }
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack, deleteTrack },
    []
)
