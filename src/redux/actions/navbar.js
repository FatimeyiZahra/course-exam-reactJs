import * as actionTypes from "./actionTypes";

// export const changeContactModal = val => ({
//     type: actionTypes.ChangeContactModalVisibility,
//     payload: val
// })

export const changeCollapsed = (val) => (dispatch) => {
  dispatch({ type: actionTypes.IsCollapsed, payload: { val } });
};


export const changeMenuOpen = (val) => (dispatch) => {
    dispatch({ type: actionTypes.MenuIsOpen, payload: { val } });
  };