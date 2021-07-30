import axios from 'axios'
import C from './constants.js'



// Actions
function fetchArticles (data) {
    return {
        type: C.RETRIEVE_ARTICLES,
        payload: data,
        isLoading: false
    }
}


// Action Creators


// Retrieves an array of articles from backend api.
export const retrieveArticles = () => {
    return function (dispatch) {
        return axios.get("/api/test")
            .then( ({ data }) => {
                dispatch(fetchArticles(data))           
            })
            .catch((err) => console.log(err))
        }
}
