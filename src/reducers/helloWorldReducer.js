let defaultState = {
  loadingList: false,
  loading: false,
  hellos: [],
  hello: ""
};

const helloWorldReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOAD_HELLO_WORLD":
      return { ...state, loadingList: true };
    case "LOAD_HELLO_WORLD_ID":
      return { ...state, loading: true };
    case "LOAD_HELLO_WORLD_SUCCESS":
      return {
        ...state,
        loadingList: false,
        loading: false,
        hellos: action.hellos
      };
    case "LOAD_HELLO_WORLD_ID_SUCCESS":
      return {
        ...state,
        loadingList: false,
        loading: false,
        hello: action.hello
      };
    case "LOAD_HELLO_ERROR":
      return {
        ...state,
        loadingList: false,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default helloWorldReducer;
