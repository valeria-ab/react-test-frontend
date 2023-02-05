import classNames from "classnames/bind";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car } from "../../../graphql/generated";
import { removeCar } from "../../../store/favorites-reducer";
import { IAppStore } from "../../../store/store";
import style from "../../../styles/SavedCarCard.module.scss";
import { CarCardPhotoBlock } from "../catalog/CarCard";
import deleteButton from "./../../../assets/DeleteButton.png";

const cx = classNames.bind(style);

const SavedCarCard: FC<{ car: Car }> = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector<IAppStore, Car[]>(
    ({ favorites }) => favorites.favoriteCars
  );
  const isCarSaved = favoriteCars.find((savedCar) => savedCar.id === car.id);

  return (
    <div className={style.savedCarCard}>
      <CarCardPhotoBlock
        availability={car.availability}
        brand={car.brand}
        model={car.model}
        img_src={car.img_src}
      />

      <div className={style.autoLayout}>
        <h2 className={style.title}>{`${car.brand} ${car.model}`}</h2>
        <div className={style.description}>
          <p>
            {car.description
              ? car.description
              : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."}
          </p>
          <p>{`Год: ${car.model_year}`}</p>
          <p>{`Цвет: ${car.color}`}</p>
        </div>
        <span className={style.price}>{`от ${car.price}`}</span>
        <div className={style.buy_addToFavs_block}>
          <button
            className={cx("buyButton", {
              available: car.availability,
              notAvailable: !car.availability,
            })}
          >
           Выбрать комплектацию
          </button>
        
            <img
              src={deleteButton}
              alt="delete_button"
              className={cx("deleteButton")}
              onClick={() => dispatch(removeCar(car.id))}
            />
         
        </div>
      </div>
    </div>
  );
};

export default SavedCarCard;
