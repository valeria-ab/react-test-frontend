import type { Car } from "../graphql/generated";

export type InitialFavoritesStateType = {
  favoriteCars: Car[];
};

export const addCar = (car: Car) =>
  ({
    type: "FAVORITES/ADD_CAR",
    car,
  } as const);

export const removeCar = (id: number) =>
  ({
    type: "FAVORITES/REMOVE_CAR",
    id,
  } as const);

type ActionsType = ReturnType<typeof addCar> | ReturnType<typeof removeCar>;

const initialState: InitialFavoritesStateType = {
  favoriteCars: [] as Car[],
};

export const favoritesReducer = (
  state: InitialFavoritesStateType = initialState,
  action: ActionsType
): InitialFavoritesStateType => {
  switch (action.type) {
    case "FAVORITES/ADD_CAR":
      return { ...state, favoriteCars: [...state.favoriteCars, action.car] };
    case "FAVORITES/REMOVE_CAR":
      return {
        ...state,
        favoriteCars: state.favoriteCars.filter((car) => car.id !== action.id),
      };

    default:
      return state;
  }
};
