import { SENT_REQUEST, ADD_FRIEND, REMOVE_FRIEND } from "../actions/types";

const initialState = {
  friendsRequest: [],
  loading: false,
  friends: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENT_REQUEST:
      return {
        ...state,
        friendsRequest: [action.payload, ...state.friendsRequest],
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [action.payload, ...state.friends],
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(
          (friend) => friend.email !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default friendReducer;
