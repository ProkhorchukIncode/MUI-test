import { createStore, combineReducers} from "redux";
import goodsReducer from "./goods/goodsReducer";

const rootReducer = combineReducers({goodsReducer});
let store = createStore(rootReducer);
export default store;