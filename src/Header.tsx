import { FC, useEffect } from "react";
import styles from "./Header.module.scss";
import burger from "./assets/Burger.png";
import saved from "./assets/Saved.png";

const Header: FC = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_catalogButton_container}>
          <div className={styles.logo}>
            <span className={styles.logoColored}>КУПИ</span>
            <span className={styles.logoBlack}>АВТО</span>
          </div>

          <button className={styles.catalog_button}>
            <img src={burger} alt="burger" />
            <span className={styles.text}>Каталог</span>
          </button>
        </div>

        <div className={styles.contacts_savedButton_container}>
          <div className={styles.contacts_container}>
            <p className={styles.contact_info}>
              Москва, Волгоградский пр-кт, 43, стр 1
            </p>
            <p className={styles.contact_info}>+7 800 555 35 35</p>
          </div>

          <button className={styles.saved_button}>
            <img src={saved} alt="saved" />
            <span className={styles.text}>Избранное</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
