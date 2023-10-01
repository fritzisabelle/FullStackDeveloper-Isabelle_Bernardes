import React from 'react'
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "./style/GlobalStyle";
import HeaderTemplate from "./components/Header";
import { RouterMain } from "./Routes/RouterMain";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <HeaderTemplate />
      <RouterMain />
      <GlobalStyles />
    </div>
  );
}

export default App;
