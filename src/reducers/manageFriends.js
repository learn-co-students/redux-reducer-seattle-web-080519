export function manageFriends(state = {
    friends: [],
  }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({...state, 
                friends: [...state.friends, action.friend]
            })
        case 'REMOVE_FRIEND':
        // const findId = state.friends.findIndex(friend => friend.id === action.id);
        //     return ({...state, 
        //         friends: [...state.friends.slice(0, findId),
        //         ...state.friends.slice(findId + 1)]
        // OR:
                const findId = state.friends.filter(friend => friend.id !== action.id)
            return {...state, friends: findId}
            // })
        default:
        return state; 
    }
}
