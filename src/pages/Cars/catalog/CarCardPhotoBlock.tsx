import classNames from "classnames/bind";
import { FC } from "react";
import { baseURL } from "../../../api/api";
import style from "../../../styles/CarCard.module.scss";

const cx = classNames.bind(style);


export const CarCardPhotoBlock: FC<{
  availability: boolean;
  brand: string;
  model: string;
  img_src: string;
}> = ({ availability, brand, model, img_src }) => {
  return (
    <div
      className={cx("photoBlock", {
        photoBlock_carUnavailable: !availability,
      })}
    >
      <img className={cx({
        carNotAvailable: !availability,
      })} src={img_src ? `${baseURL}${img_src}` : undefined} alt={`${brand} ${model}`} />
      {!availability && (
        <div className={cx("photoBlock_carUnavailable_message")}>
          Нет в наличии
        </div>
      )}
    </div>
  );
};
