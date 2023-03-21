import React, { useContext } from "react";
import { Menu } from "antd";
import ThemeContext from "../ThemeContext";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./NavigationBar.module.css";

const { SubMenu } = Menu;

export default function NavigationBar() {
  const { token } = useContext(ThemeContext);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div
      className={styles.menuWrapper}
      style={{
        backgroundColor: token.colorPrimary,
      }}
    >
      <Menu
        onClick={handleClick}
        className={styles.menu}
        mode="horizontal"
        theme="dark"
        inlineCollapsed={false}
        style={{
          backgroundColor: token.colorPrimary,
        }}
      >
        <Menu.Item key="home" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="projects" icon={<SettingOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
    </div>
  );
}
