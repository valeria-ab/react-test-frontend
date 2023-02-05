import type { Car } from "../graphql/generated";



export type InitialCatalogStateType = {
  allCars: Car[],
availableCars: Car[],
notAvailableCars: Car[],
};

export const setCars = (items: Car[]) =>
  ({
    type: "CATALOG/SET_ALL_CARS",
    items
  } as const);

export const setUnavailableCars = (items: Car[]) =>
  ({
    type: "CATALOG/SET_UNAVAILABLE_CARS",
    items
  } as const);

  export const setAvailableCars = (items: Car[]) =>
  ({
    type: "CATALOG/SET_AVAILABLE_CARS",
    items
  } as const);

type ActionsType =
  | ReturnType<typeof setUnavailableCars>
  | ReturnType<typeof setAvailableCars>
  | ReturnType<typeof setCars>


const initialState: InitialCatalogStateType = {
  allCars: [] as Car[],
  availableCars: [] as Car[],
  notAvailableCars: [] as Car[],
};

export const catalogReducer = (
  state: InitialCatalogStateType = initialState,
  action: ActionsType
): InitialCatalogStateType => {
  switch (action.type) {
    case "CATALOG/SET_ALL_CARS":
      return {...state, allCars: action.items}
    case "CATALOG/SET_AVAILABLE_CARS":
    return {...state, availableCars: action.items}
    case "CATALOG/SET_UNAVAILABLE_CARS":
      return {...state, notAvailableCars: action.items}
  
    default:
      return state;
  }
};



