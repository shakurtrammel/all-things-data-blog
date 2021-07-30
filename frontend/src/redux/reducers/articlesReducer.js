import C from '../actions/constants'



const initialState = {
    articles: [],
    isLoading: true,
}



const totalState = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case C.RETRIEVE_ARTICLES: {
            return {
                ...state,
                articles: action.payload,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}


export default totalState