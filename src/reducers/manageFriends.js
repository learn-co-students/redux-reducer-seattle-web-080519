import { setupMaster } from "cluster";

export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      const removealIndex = state.friends.findIndex(
        friend => friend.id == action.id
      );

      return {
        ...state,
        friends: [
          ...state.friends.slice(0, removealIndex),
          ...state.friends.slice(removealIndex + 1)
        ]
      };

    default:
      return state;
  }
}
