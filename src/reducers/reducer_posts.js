import { FETCH_POST, FETCH_POSTS } from '../actions';

export default function(state = {}, action) { // SINCE WE GOING TO STORE OUR LIST OF POSTS INSIDE AN OBJECT, THEREFORE: state = {}
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data); // [post1, post2]
            // {4: post}
            return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
    }
}


// const posts = [
//     { id: 4, title: "Hi" },
//     { id: 25, title: "bye" },
//     { id: 36, title: "Hows it going" }
// ];

// const state = _.mapKeys(posts, 'id');
/* if we pring _mapKeys(posts, 'id), so now it returns this below */
// {"4": {"id":4, "title":"Hi"},}
// {"25": {"id":25, "title":"bye"},}
// {"36": {"id":36, "title":"Hows it going"}}
/* end mapKeys */

// state["4"] --> this will give us {"id":4, "title":"Hi"}