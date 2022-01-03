import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import theme from "./globalTheme";
import "./App.css";
import AdvancedSearch from "./pages/AdvancedSearchPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advanced" element={<AdvancedSearch />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
