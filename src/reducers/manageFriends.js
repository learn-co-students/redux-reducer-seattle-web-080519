export function manageFriends(state = { friends: [] }, action){

    switch(action.type) {
        case "ADD_FRIEND":
            return { ...state, friends: [...state.friends, action.friend] };
        case "REMOVE_FRIEND":
            const i = state.friends.findIndex( f => f.id === action.id)
            return { ...state, friends: [state.friends.slice(0, i), state.friends.slice(i + 1)] };
        default:
            state;
    };
};
