import classNames from "classnames/bind";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car } from "../../../graphql/generated";
import { addCar, removeCar } from "../../../store/favorites-reducer";
import { IAppStore } from "../../../store/store";
import style from "../../../styles/CarCard.module.scss";
import defaultEmpty from "./../../../assets/DefaultEmpty.png";
import saved from "./../../../assets/Saved.png";
import saveUnavailable from "./../../../assets/SaveUnavailable.png";
import { CarCardPhotoBlock } from "./CarCardPhotoBlock";

const cx = classNames.bind(style);

const CarCard: FC<{ car: Car }> = (
  { car }
) => {
  const [isHover, setHover] = useState<boolean>(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector<IAppStore, Car[]>(
    ({ favorites }) => favorites.favoriteCars
  );
  const isCarSaved = favoriteCars.find((savedCar) => savedCar.id === car.id);

  return (
    <div className={style.carCard}>
      <CarCardPhotoBlock
        availability={car.availability}
        brand={car.brand}
        model={car.model}
        img_src={car.img_src}
      />
      <div className={style.autoLayout}>
        <h3 className={style.title}>{`${car.brand} ${car.model}`}</h3>
        <div className={style.description}>
         
          <span>{`Год: ${car.model_year} Цвет: ${car.color}`}</span>
        </div>
        <span className={style.price}>{`от ${car.price}`}</span>
        <div className={style.buy_addToFavs_block}>
          <button
            className={cx("buyButton", {
              available: car.availability,
              notAvailable: !car.availability,
            })}
          >
            Купить
          </button>
          {car.availability ? (
            isCarSaved ? (
              <img
                src={saved}
                alt="default_empty"
                className={cx("heartIcon_available")}
                onClick={() => dispatch(removeCar(car.id))}
              />
            ) : (
              <img
                src={isHover ? saved : defaultEmpty}
                alt="default_empty"
                className={cx("heartIcon_available")}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => dispatch(addCar(car))}
              />
            )
          ) : (
            <img
              src={saveUnavailable}
              alt="heartIcon_notAvailable"
              className={cx("heartIcon_notAvailable")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;

