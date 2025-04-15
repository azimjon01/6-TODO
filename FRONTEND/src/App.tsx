// import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import AppRoutes from "./routes";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";

// const Wrapper = styled.div({
//   position: "relative",
//   width: "40vw",
//   height: "80vh",
//   margin: "40px auto",
//   padding: 24,
//   border: "1px solid #ccc",
//   backgroundColor: "#f9f9f9",
//   overflowY: "hidden",
// });

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const togleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes toggleTheme={togleTheme} />
    </ThemeProvider>
  );
}

export default App;
