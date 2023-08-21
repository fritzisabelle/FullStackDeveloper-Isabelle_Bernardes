import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { GlobalStyles } from "./style/GlobalStyle";
import HeaderTemplate from "./components/Header";
import { HomeTemplate } from "./Pages/Home/Home";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <HeaderTemplate />
      <HomeTemplate />
      <GlobalStyles />
    </div>
  );
}

export default App;
