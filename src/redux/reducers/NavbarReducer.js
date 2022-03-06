import * as actionTypes from "../actions/actionTypes";

const initialState = {
  collapsed: {val:true},
  menuOpen:{val:false}
};

const NavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IsCollapsed:
      return { ...state, collapsed: action.payload };
      case actionTypes.MenuIsOpen:
        return { ...state, menuOpen: action.payload };
    default:
      return state;
  }
};

export default NavbarReducer;
