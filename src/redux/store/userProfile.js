import { createStore } from "redux";
const profileReducer = (state = {}, action) => {
  if (action.type === "ADD") {
    return action.payload;
  }
  return state;
};

const store = createStore(profileReducer);

export default store;
