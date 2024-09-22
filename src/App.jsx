import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";
import { ThemeContext } from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import { useContext } from "react";

import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <MainWrapper />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

function MainWrapper() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`app-wrapper ${darkMode ? `dark-mode` : `light-mode`}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
