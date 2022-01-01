import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import theme from "./globalTheme";
import "./App.css";
import AdvancedSearch from "./pages/AdvancedSearchPage";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AdvancedSearch />
      </ThemeProvider>
    </div>
  );
};

export default App;
