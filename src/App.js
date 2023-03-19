import React, { useState, Fragment } from "react";

import "antd/dist/reset.css";

import NavigationBar from "./components/navigation-bar";
import { ConfigProvider } from "antd";
import Project from "./components/project";

function App() {
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        {/* <NavigationBar /> */}
        <Project />
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
