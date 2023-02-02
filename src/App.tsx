import { Global } from "@emotion/react";
import { FC } from "react";
import Cars from "./pages/Cars/catalog/Cars";
import Header from "./Header";
import { GLOBAL_STYLES } from "./styles/global.styles";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Cars />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
