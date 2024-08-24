import Navbar from "./components/navbar/Navbar";
import { darkTheme } from "./theme/darktheme";

const { ThemeProvider } = require("@emotion/react");

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
