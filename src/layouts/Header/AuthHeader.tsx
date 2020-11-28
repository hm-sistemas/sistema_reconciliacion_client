import React from "react";
import { Layout, Menu } from "antd";
import { Row, Col } from "antd";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./AuthHeader.css";

const { SubMenu } = Menu;
const { Header } = Layout;

const AuthHeader = (props: any) => {
  const user = localStorage.getItem("user");

  const handleClick = (e: any) => {
    console.log("click ", e);
  };

  return (
    <Header className="header">
      <Row>
        <Col span={8}>
          <h2>Hospital Mexico - Sistema Reconciliación</h2>
        </Col>
        <Col span={2} offset={14}>
          <Menu onClick={handleClick} mode="inline" theme="dark">
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Hola">
              <Menu.ItemGroup>
                <Menu.Item key="setting:1">Hola</Menu.Item>
                <Menu.Item key="logout">Salir</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default AuthHeader;
