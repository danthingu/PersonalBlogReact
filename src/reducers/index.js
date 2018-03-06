import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'; // just rename reducer property as formReducer, just so we see we can rename it, beside reducer name is too generic
import PostsReducer from './reducer_posts';
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});


export default rootReducer;
