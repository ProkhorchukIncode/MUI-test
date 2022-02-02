import { createStore, combineReducers} from "redux";
import goodsReducer from "./goods/goodsReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({goodsReducer, searchReducer});
let store = createStore(rootReducer);
export default store;