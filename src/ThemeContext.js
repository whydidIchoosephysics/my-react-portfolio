import { createContext } from "react";

const ThemeContext = createContext({
  token: {
    colorPrimary: "#722ED1",
  },
});

export default ThemeContext;
