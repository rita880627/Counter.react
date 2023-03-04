export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ODDINCREMENT = "ODDINCREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const oddIncrement = () => {
  return {
    type: ODDINCREMENT
  };
};

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
