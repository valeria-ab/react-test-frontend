import { CarsAPI } from "../api/api";
import type { Car } from "../graphql/generated";
import { AppThunk } from "./store";

export type InitialCatalogStateType = {
  cars: Car[];
};

export const setCars = (items: Car[]) =>
  ({
    type: "CATALOG/SET_ALL_CARS",
    items,
  } as const);
export const setSortByAccessibility = () =>
  ({
    type: "CATALOG/SET_SORT_BY_ACCESSIBILITY",
  } as const);
export const setSortOldFirst = () =>
  ({
    type: "CATALOG/SET_SORT_OLD_FIRST",
  } as const);
export const setSortNewFirst = () =>
  ({
    type: "CATALOG/SET_SORT_NEW_FIRST",
  } as const);

export const setSortByName_AZ = () =>
  ({
    type: "CATALOG/SET_SORT_BY_NAME_AZ",
  } as const);
export const setSortByName_ZA = () =>
  ({
    type: "CATALOG/SET_SORT_BY_NAME_ZA",
  } as const);
  export const setSortByPrice_asc = () =>
  ({
    type: "CATALOG/SET_SORT_BY_PRICE_asc",
  } as const);
  export const setSortByPrice_desc = () =>
  ({
    type: "CATALOG/SET_SORT_BY_PRICE_desc",
  } as const);

type ActionsType =
  | ReturnType<typeof setSortByName_AZ>
  | ReturnType<typeof setSortByName_ZA>
  | ReturnType<typeof setSortNewFirst>
  | ReturnType<typeof setSortOldFirst>
  | ReturnType<typeof setSortByPrice_asc>
  | ReturnType<typeof setSortByPrice_desc>
  | ReturnType<typeof setSortByAccessibility>
  | ReturnType<typeof setCars>;

const initialState: InitialCatalogStateType = {
  cars: [] as Car[],
};

export const catalogReducer = (
  state: InitialCatalogStateType = initialState,
  action: ActionsType
): InitialCatalogStateType => {
  switch (action.type) {
    case "CATALOG/SET_ALL_CARS":
      return { ...state, cars: action.items };
    case "CATALOG/SET_SORT_BY_NAME_AZ":
      return {
        ...state,
        cars: [
          ...state.cars.sort(function (a, b) {
            if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
              return -1;
            }
            if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
              return 1;
            }
            return 0;
          }),
        ],
      };
    case "CATALOG/SET_SORT_BY_NAME_ZA":
      return {
        ...state,
        cars: [
          ...state.cars.sort(function (a, b) {
            if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
              return 1;
            }
            if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
              return -1;
            }
            return 0;
          }),
        ],
      };
    case "CATALOG/SET_SORT_BY_ACCESSIBILITY": {
      const availableCars = state.cars.filter((car) => car.availability);
      const notAvailableCars = state.cars.filter((car) => !car.availability);
      return { ...state, cars: [...availableCars, ...notAvailableCars] };
    }
    case "CATALOG/SET_SORT_NEW_FIRST": 
      return {
        ...state,
        cars: [...state.cars.sort(function (a, b) {
          return b.model_year - a.model_year;
        })]
    }

    case "CATALOG/SET_SORT_OLD_FIRST": {
  
      return {
        ...state,
        cars: [
          ...state.cars.sort(function (a, b) {
            return a.model_year - b.model_year;
          }),
        ],
      };
    }
    case "CATALOG/SET_SORT_BY_PRICE_asc": {
      return {
        ...state,
        cars: [
          ...state.cars.sort(function (a, b) {
            return  Number(a.price.slice(1))  - Number(b.price.slice(1));
          }),
        ],
      };
    }
    case "CATALOG/SET_SORT_BY_PRICE_desc": {
      return {
        ...state,
        cars: [
          ...state.cars.sort(function (a, b) {
            return  Number(b.price.slice(1)) - Number(a.price.slice(1));
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export const getAllCarsTC =
  (): AppThunk => (dispatch) => {
    CarsAPI.getAllCars()
      .then((res) => {
        dispatch(setCars(res.data.cars));
        dispatch(setSortByAccessibility());
      })
      .catch((error) => {
        console.log(error.data.error.message);
      });
  };

export const getCarsByNameTC =
  (search: string): AppThunk =>
  (dispatch) => {
    CarsAPI.getCarsByName(search)
      .then((res) => {
        dispatch(setCars(res.data.cars));
        dispatch(setSortByAccessibility());
      })
      .catch((error) => {
        console.log(error.data.error.message);
      });
  };
