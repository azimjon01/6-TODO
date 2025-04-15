import styled from "@emotion/styled";
import { ReactNode } from "react";
import DarkButton from "../dark-button/DarkButton";

const LayoutWrapper = styled.div((props) => ({
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  background: props.theme.colors.secondary,
}));

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
}

const Layout = ({ children, toggleTheme }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <DarkButton toggleTheme={toggleTheme} />
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
