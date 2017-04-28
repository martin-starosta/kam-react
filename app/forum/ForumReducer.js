import { ADD_POST } from './ForumActions';

function posts(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {
                    text: action.text,
                }
            ];
        default:
            return state;
    }
};

export default posts;