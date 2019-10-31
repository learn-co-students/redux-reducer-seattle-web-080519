

let state = { friends: [] }
let action_add = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1
    }
}
let action_remove = {
    type: "REMOVE_FRIEND",
    id: 1
}

export function manageFriends(state, action){

    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [
                        ...state.friends, action.friend
                    ]
                }
            );
        case "REMOVE_FRIEND":
            let toxicIndex = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, toxicIndex),
                        ...state.friends.slice(toxicIndex + 1)
                    ]
                }
            )

            

        default:
            return state;
    }


}
