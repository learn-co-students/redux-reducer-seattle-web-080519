export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            const newFriends = [...state.friends];
            newFriends.push(action.friend)
            return {...state, friends: newFriends};
        case 'REMOVE_FRIEND':
            const remainingFriends = state.friends.filter(friend => friend.id !== action.id)
            return {...state, friends: remainingFriends};
        default: 
            return state;
    }
}
