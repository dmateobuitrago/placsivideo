const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist: [...state.mylist, action.payload]
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter(item => item.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.originals.find(item => item.id === Number(action.payload)) || state.trends.find(item => item.id === Number(action.payload)) || []
            }
        case 'SEARCH_REQUEST':
            const allvideos = [...state.originals,...state.trends]
            const findResult = allvideos.filter(item => item.title.includes(action.payload))
            return {
                ...state,
                searchResults: findResult,
                searchTerm: action.payload,
            }
        default:
            return state;
    }
}

export default reducer