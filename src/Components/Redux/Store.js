import { legacy_createStore as createStore } from "redux";
import ProductReducer from './Reducer/Reducer';




const store = createStore(ProductReducer)

export default store;