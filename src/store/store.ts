import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { ThunkAction, ThunkDispatch } from "redux-thunk/es/types";
import { catalogReducer } from "./catalog-reducer";
import { favoritesReducer } from "./favorites-reducer";

const reducers = combineReducers({
  favorites: favoritesReducer,
  catalog: catalogReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store;

export default store;

export type IAppStore = ReturnType<typeof reducers>;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;