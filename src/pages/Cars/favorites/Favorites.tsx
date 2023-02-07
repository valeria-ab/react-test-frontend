import { FC } from "react";
import { useSelector } from "react-redux";
import { Car } from "../../../graphql/generated";
import { IAppStore } from "../../../store/store";
import style from "../../../styles/Favorites.module.scss";
import SavedCarCard from "./SavedCarCard";

const Favorites: FC = () => {
  const favoriteCars = useSelector<IAppStore, Car[]>(
    ({ favorites }) => favorites.favoriteCars
  );

  return (
    <div className={style.favorites}>
      <div className={style.favorites_container}>
        <div className={style.favorites_container_title}>{`Избранные товары — ${favoriteCars.length} позиций`}</div>
        {favoriteCars.map((car) => (
          <SavedCarCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
