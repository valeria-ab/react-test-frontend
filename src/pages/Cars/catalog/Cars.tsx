import { FC, useEffect } from "react";
import carsJSON from "../../../fake_cars.json";
import { Car, Query } from "../../../graphql/generated";
import CarCard from "./CarCard";
import style from "../../../styles/Cars.module.scss";
import { useDispatch } from "react-redux";
import {
  setAvailableCars,
  setCars,
  setUnavailableCars,
} from "../../../store/catalog-reducer";
import { useSelector } from "react-redux/es/exports";
import { IAppStore } from "../../../store/store";

const Cars: FC = () => {
  const dispatch = useDispatch();
  const availableCars = useSelector<IAppStore, Car[]>(
    ({ catalog }) => catalog.availableCars
  );
  const notAvailableCars = useSelector<IAppStore, Car[]>(
    ({ catalog }) => catalog.notAvailableCars
  );
  const cars: Query["cars"] = carsJSON;
  useEffect(() => {
    dispatch(setCars(cars));
    dispatch(setAvailableCars(cars.filter((car) => car.availability)));
    dispatch(setUnavailableCars(cars.filter((car) => !car.availability)));
  }, [cars]);

  return (
    <div className={style.cars}>
      {availableCars.map((car) => (
        <CarCard car={car}
          key={car.id}
        />
      ))}
      <br />
      {notAvailableCars.map((car) => (
        <CarCard car={car}
          key={car.id}
        />
      ))}
    </div>
  );
};

export default Cars;
