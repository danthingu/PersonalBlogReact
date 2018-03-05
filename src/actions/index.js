import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=DannyIsTheCoolest'
// will involve network inside action creator, we need axios
// we needredux promise to handle the asynchronous nature of request itself
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    // because the request is being assigned to the payload property the redux promise middleware that we made
    // use of previously will automatically resolve this request for us whenever it sees this action
    // come across. So by the time that this action arrives in the reducer the paylaod property will contain the
    // response object from axios which will have our big old array of posts
    return {
        type: FETCH_POSTS,
        payload: request
    };
}