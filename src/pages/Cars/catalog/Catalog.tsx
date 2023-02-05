import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Car } from "../../../graphql/generated";
import { IAppStore } from "../../../store/store";
import style from "../../../styles/Catalog.module.scss";
import Cars from "./Cars";
import sortUp from "../../../assets/SortUp.png";
import sortDown from "../../../assets/SortDown.png";

const Catalog: FC = () => {
  const [isSelectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectTitle, setSelectTitle] = useState<string>("Сначала в наличии");
  const allCars = useSelector<IAppStore, Car[]>(
    ({ catalog }) => catalog.allCars
  );
  const optionsTitle = [
    "Сначала в наличии",
    "По имени (A-Z)",
    "По имени (Z-A)",
    "Сначала новее",
    "Сначала старше",
    "Сначала дешевле",
    "Сначала дороже",
  ];

  const oldFirst = allCars.sort(function (a, b) {
    return a.model_year - b.model_year;
  });

  return (
    <div className={style.catalog}>
      <div className={style.catalog_container}>
        <div
          onClick={() => setSelectOpen(!isSelectOpen)}
          className={style.sortBlock}
        >
          <div className={style.selectTitle}>
            <span>
              <img src={sortUp} alt="sortUp" />
              <img src={sortDown} alt="sortDown" />
            </span>
            {selectTitle}
            {isSelectOpen && (
              <div className={style.selectBody}>
                {optionsTitle.map((title) => (
                  <div
                    className={style.option}
                    onClick={() => setSelectTitle(title)}
                  >
                    {title}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <div>
            <input type="text" /> <button>find</button>
          </div> */}
        </div>
        <Cars />
      </div>
    </div>
  );
};

export default Catalog;
