import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortDown from "../../../assets/SortDown.png";
import sortUp from "../../../assets/SortUp.png";
import { Car } from "../../../graphql/generated";
import {
  setSortByAccessibility,
  setSortByName_AZ,
  setSortByName_ZA,
  setSortByPrice_asc,
  setSortByPrice_desc,
  setSortNewFirst,
  setSortOldFirst,
} from "../../../store/catalog-reducer";
import { AppDispatch, IAppStore } from "../../../store/store";
import style from "../../../styles/Catalog.module.scss";

export const Select: FC = () => {
  const [isSelectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectTitle, setSelectTitle] = useState<string>("Сначала в наличии");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={style.selectTitle}
      onClick={() => setSelectOpen(!isSelectOpen)}
    >
      <span>
        <img src={sortUp} alt="sortUp" />
        <img src={sortDown} alt="sortDown" />
      </span>
      {selectTitle}
      {isSelectOpen && (
        <div className={style.selectBody}>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("Сначала в наличии");
              dispatch(setSortByAccessibility());
            }}
          >
            Сначала в наличии
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("По имени (A-Z)");
              dispatch(setSortByName_AZ());
            }}
          >
            По имени (A-Z)
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("По имени (Z-A)");
              dispatch(setSortByName_ZA());
            }}
          >
            По имени (Z-A)
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("Сначала новее");
              dispatch(setSortNewFirst());
            }}
          >
            Сначала новее
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("Сначала старше");
              dispatch(setSortOldFirst());
            }}
          >
            Сначала старше
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("Сначала дешевле");
              dispatch(setSortByPrice_asc());
            }}
          >
            Сначала дешевле
          </div>
          <div
            className={style.option}
            onClick={() => {
              setSelectTitle("Сначала дороже");
              dispatch(setSortByPrice_desc());
            }}
          >
            Сначала дороже
          </div>
        </div>
      )}
    </div>
  );
};
