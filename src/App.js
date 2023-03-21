import React, { useState, Fragment } from "react";

import "antd/dist/reset.css";

import NavigationBar from "./components/NavigationBar";
import About from "./components/About";

// Ant Design
import { ConfigProvider } from "antd";
import { Button, DatePicker, Space, version } from "antd";

// Components
import Project from "./components/Project";
import MyButton from "./components/Button";

// Theme
import ThemeContext from "./ThemeContext.js";

function App() {
  return (
    <Fragment>
      <ConfigProvider>
        <ThemeContext.Provider
          value={{
            token: {
              colorPrimary: "#722ED1",
            },
          }}
        >
          <main className="App">
            <NavigationBar />
            <About />
            <Project />
            <MyButton text="Hello" />
          </main>
        </ThemeContext.Provider>
      </ConfigProvider>

      <div className="App">
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
      </div>
    </Fragment>
  );
}

export default App;
