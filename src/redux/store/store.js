import { combineReducers } from "redux";
import ModalReducer from "../reducers/ModalReducer";
import NavbarReducer from "../reducers/NavbarReducer";
const rootReducers= combineReducers({
    ModalReducer,
    NavbarReducer

})
export default rootReducers;