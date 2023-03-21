import React, { Fragment, useContext } from "react";
import { Divider } from "antd";
import ThemeContext from "../ThemeContext";

const Project = () => {
  const { token } = useContext(ThemeContext);

  return (
    <Fragment>
      <Divider
        style={{ backgroundColor: token.colorPrimary }}
        orientation="left"
        orientationMargin={50}
      >
        <p>text</p>
      </Divider>
    </Fragment>
  );
};

export default Project;
