import { Global } from "@emotion/react";
import GlobalStyles from "../styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../features/todo/TodoList";
import Layout from "../components/layout/Layout";

const ROUTES_CONFIG = [
  {
    path: "/",
    element: <TodoList />,
  },
];

type AppRoutesProps = {
  toggleTheme: () => void;
};

const AppRoutes = ({ toggleTheme }: AppRoutesProps) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<Layout toggleTheme={toggleTheme}>{element}</Layout>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
