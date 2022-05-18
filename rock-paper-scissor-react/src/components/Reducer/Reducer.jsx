export const Reducer = (state, action) => {

    switch (action.type) {
        case 'SET_SCORE': {
            return {
                ...state,
                score: action.payload
            }
        }
        case 'SET_USER_PICK': {
            console.log(action.payload);
            return {
                ...state,
                userPick: action.payload
            }
        }
        default:
            console.log('DEFAULT');
            return state;
    }
}