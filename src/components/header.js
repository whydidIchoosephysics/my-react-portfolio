import React from 'react';
import { Layout, Menu } from 'antd';
import './header.css';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        {/* Add your menu items here */}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
