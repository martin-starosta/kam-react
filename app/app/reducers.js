import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
import posts from '../forum/ForumReducer';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    posts
});

export default todoApp;