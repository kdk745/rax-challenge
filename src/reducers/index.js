import {combineReducers} from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case "POSTS_LOAD_ERROR":
      return [];
    case "POSTS_LOAD_SUCCESS":
      return action.items;
  }
  return state;
}

export default combineReducers({
  posts
});
