import { useState } from "react";
import { useDispatch } from "react-redux";
import searchIcon from "../../../assets/Search.png";
import {
  getCarsByNameTC
} from "../../../store/catalog-reducer";
import { AppDispatch } from "../../../store/store";
import style from "../../../styles/Catalog.module.scss";


export const Input = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");

  return (
    <div className={style.input}>
      <input  type="text"
      placeholder="Найти авто"
       onChange={(e) => setSearch(e.currentTarget.value)}
        />
      <button onClick={() => dispatch(getCarsByNameTC(search))}>
        <img src={searchIcon} />
      </button>
    </div>
  );
};
