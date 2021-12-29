import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import theme from "./globalTheme";
import "./App.css";
import RandomMeal from "./components/RandomMeal";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
        <RandomMeal />
      </ThemeProvider>
    </div>
  );
};

export default App;
