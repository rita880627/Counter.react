import * as Actions from "../actions/counterAction";

const initialState = {
  count: 0
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case Actions.ODDINCREMENT: {
      if (state.count % 2 !== 0) {
        return { ...state, count: state.count + 1 };
      } else {
        return state;
      }
    }
    case Actions.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

export default Reducer;
