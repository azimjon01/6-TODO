import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Themed = styled.div({
  position: "absolute",
  top: 50,
  right: 50,
});

type ThemedIconProps = {
  light: ReactNode;
  dark: ReactNode;
};

const ThemedIcon = ({ light, dark }: ThemedIconProps) => {
  const theme = useTheme();
  return <Themed>{theme.mode === "light" ? light : dark}</Themed>;
};

export default ThemedIcon;
