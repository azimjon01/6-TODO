import styled from "@emotion/styled";
import ThemedIcon from "../theme/ThemedIcon";

const DarkThemeIcon = styled.button({
  background: "none",
  border: "none",
  cursor: "pointer",
});

type DarkButtonProps = {
  toggleTheme: () => void;
};

const DarkButton = ({ toggleTheme }: DarkButtonProps) => {
  return (
    <>
      <ThemedIcon
        light={<DarkThemeIcon onClick={toggleTheme}>🌘</DarkThemeIcon>}
        dark={<DarkThemeIcon onClick={toggleTheme}>🌕</DarkThemeIcon>}
      />
    </>
  );
};

export default DarkButton;
