import Main from "./Views/Main/index";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
