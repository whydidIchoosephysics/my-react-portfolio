import React, { useContext } from "react";
import { Button } from "antd";
import ThemeContext from "../ThemeContext";

const MyButton = (props) => {
  const { text, onClick, style } = props;
  const { token } = useContext(ThemeContext);

  return (
    <Button
      onClick={onClick}
      style={{ ...style, backgroundColor: token.colorPrimary }}
    >
      {text}
    </Button>
  );
};

export default MyButton;
