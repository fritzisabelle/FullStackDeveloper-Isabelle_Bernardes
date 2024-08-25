import React from 'react'
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "./style/GlobalStyle";
import HeaderTemplate from "./components/Header";
import { RouterMain } from "./Routes/RouterMain";
import { JobsProvider } from './providers/JobsContext';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <JobsProvider>
        <HeaderTemplate />
        <RouterMain />
        <GlobalStyles />
      </JobsProvider>
    </div>
  );
}

export default App;
