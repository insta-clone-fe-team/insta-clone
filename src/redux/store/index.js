import { createStore } from "redux";
const likeReducer = (state = [{ id: 1, contents: "aaa" }], action) => {
  if (action.type === "LIKE") {
    return [{ id: 1, contents: "like" }];
  }
  return state;
};

const store = createStore(likeReducer);

export default store;
