import classNames from "classnames/bind";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Car } from "../../../graphql/generated";
import { removeCar } from "../../../store/favorites-reducer";
import style from "../../../styles/SavedCarCard.module.scss";
import { CarCardPhotoBlock } from "../catalog/CarCardPhotoBlock";
import deleteButton from "./../../../assets/DeleteButton.png";

const cx = classNames.bind(style);

const SavedCarCard: FC<{ car: Car }> = ({ car }) => {
  const dispatch = useDispatch();

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
          <p>{car.description}</p>
          <p>{`Год: ${car.model_year}`}</p>
          <p>{`Цвет: ${car.color}`}</p>
        </div>
        <span className={style.price}>{`от ${car.price}`}</span>
        <div className={style.buttons_block}>
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
