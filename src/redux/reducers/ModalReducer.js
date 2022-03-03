import * as actionTypes from "../actions/actionTypes";

const initialState = {
  changeContactModal: false,
};
// console.log(initialState)
const ModalReducer = (state = initialState, action) => {
  switch(action.type)  {
    case actionTypes.ChangeContactModalVisibility:
      return { ...state, changeContactModal: action.payload };
    default:
      return state;
  }
};

export default ModalReducer;
