import { FC } from "react";
import style from "../../../styles/Catalog.module.scss";
import Cars from "./Cars";
import { Input } from "./Input";
import { Select } from "./Select";

const Catalog: FC = () => {

  return (
    <div className={style.catalog}>
      <div className={style.catalog_container}>
        <div className={style.sortBlock}>
          <Select />
          <Input />
        </div>
        <Cars />
      </div>
    </div>
  );
};

export default Catalog;
