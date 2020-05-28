import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
    switch(action.type) {
        case 'fetch_tracks':
            return state
        default: return state
    }
}

const fetchTracks = dispatch = _ => {
    dispatch({ type: 'fetch_tracks', payload: ''})
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks },
    {}
)
