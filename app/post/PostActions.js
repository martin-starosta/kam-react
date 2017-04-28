/* action types */
export const FETCH_POST = 'FETCH_POST';


/* action creators */
export function fetchPost(id) {
    return { type: FETCH_POST, id };
}