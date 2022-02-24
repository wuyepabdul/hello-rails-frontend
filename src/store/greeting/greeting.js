export const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
export const GET_GREETING_SUCCESS = "GET_GREETING_SUCCESS";

export const getGreetingAction = (data) => ({
  type: GET_GREETING_SUCCESS,
  payload: data,
});

export default function greetingReducer(state = null, action) {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
