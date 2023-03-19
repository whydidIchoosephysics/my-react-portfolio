import React, { Fragment } from "react";
import { theme, Divider } from "antd";

const Project = () => {
  const { useToken } = theme;
  const { token } = useToken();

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
