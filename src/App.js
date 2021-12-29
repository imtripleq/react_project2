import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import theme from "./globalTheme";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
