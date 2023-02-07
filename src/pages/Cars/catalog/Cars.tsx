import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Car } from "../../../graphql/generated";
import { getAllCarsTC } from "../../../store/catalog-reducer";
import { AppDispatch, IAppStore } from "../../../store/store";
import style from "../../../styles/Cars.module.scss";
import CarCard from "./CarCard";

const Cars: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cars = useSelector<IAppStore, Car[]>(({ catalog }) => catalog.cars);

  useEffect(() => {
    dispatch(getAllCarsTC());
  }, []);

  return (
    <div className={style.cars}>
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </div>
  );
};

export default Cars;
