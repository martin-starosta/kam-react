import { FETCH_POST } from './PostActions';

function postDetails(state = [], action) {
    switch (action.type) {
        case FETCH_POST:
            return [
                ...state,
                {
                    id: action.id,
                }
            ];
        default:
            return state;
    }
};

export default postDetails;