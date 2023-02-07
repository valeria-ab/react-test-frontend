import { Global } from "@emotion/react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Catalog from "./pages/Cars/catalog/Catalog";
import Favorites from "./pages/Cars/favorites/Favorites";
import { GLOBAL_STYLES } from "./styles/global.styles";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/saved" element={<Favorites />} />
        <Route path={"*"} element={<div>Страница не найдена</div>} />
      </Routes>
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
