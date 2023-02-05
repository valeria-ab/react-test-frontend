import { combineReducers, legacy_createStore as createStore } from "redux";
import { catalogReducer } from "./catalog-reducer";
import { favoritesReducer } from "./favorites-reducer";

const reducers = combineReducers({
  favorites: favoritesReducer,
  catalog: catalogReducer,
});

const store = createStore(reducers);
// @ts-ignore
window.store = store;

export default store;

export type IAppStore = ReturnType<typeof reducers>;
export type RootState = ReturnType<typeof store.getState>;
