import * as actionTypes from "./actionTypes"

// export const changeContactModal = val => ({
//     type: actionTypes.ChangeContactModalVisibility,
//     payload: val
// })

export const changeContactModal = (val) => (dispatch) => {
    dispatch({ type:  actionTypes.ChangeContactModalVisibility, payload: {val} });
  };