import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    font: {
      base: string;
      heading: string;
    };
    borders: {
      border: string;
    };
    sizes: {
      size: string;
    };
  }
}
