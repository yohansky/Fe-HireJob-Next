const initialState = {
  worker: [],
};

const workerReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_WORKER") {
    return {
      ...state,
      worker: action.payload,
    };
  } else if (action.type === "CREATE_WORKER") {
    return state;
  } else if (action.type === "UPDATE_WORKER") {
    return state;
  } else if (action.type === "DELETE_WORKER") {
    return state;
  } else {
    return state;
  }
};

export default workerReducer;
