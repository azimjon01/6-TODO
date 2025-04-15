export const lightTheme = {
  mode: "light",
  colors: {
    primary: "red",
    secondary: "#5ccd70",
    background: "#fff",
    text: "#000",
  },
  font: {
    base: "'Inter',sans-serif",
    heading: "'Poppins'.sans-serif",
  },
  borders: {
    border: "1px solid #e5e7e7",
  },
  sizes: {
    size: "16px",
  },
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "red",
    secondary: "#5ccd70",
    background: "#000",
    text: "#fff",
  },
  font: {
    base: "'Inter',sans-serif",
    heading: "'Poppins',sans-serif",
  },
  borders: {
    border: "1px solid #343f5b",
  },
  sizes: {
    size: "16px",
  },
};

export type ThemeType = typeof lightTheme;
