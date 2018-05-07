
const initState = {
  apple: 1
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        apple: state.apple + 1
      };
    }
    case 'DEC': {
      return {
        ...state,
        apple: state.apple - 1
      };
    }
    default:
      return state;
  }
};