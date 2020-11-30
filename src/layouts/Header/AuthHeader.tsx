import React from "react";
import { Layout, Menu } from "antd";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

import "./AuthHeader.css";

const { SubMenu } = Menu;
const { Header } = Layout;

const AuthHeader = (props: any) => {
  const user = JSON.parse(localStorage.getItem("user")!);

  const handleLogout = (e: any) => {
    localStorage.removeItem("user");
    props.history.push("/login");
    window.location.reload();
  };

  return (
    <Header className="header">
      <Row>
        <Col span={8}>
          <h2>Hospital Mexico - Sistema Reconciliación</h2>
        </Col>
        <Col span={3} offset={13}>
          {user ? (
            <Menu mode="inline" theme="light">
              <SubMenu key="SubMenu" icon={<UserOutlined />} title={user.name}>
                <Menu.ItemGroup>
                  <Menu.Item
                    onClick={handleLogout}
                    icon={<LogoutOutlined />}
                    key="logout"
                  >
                    <span>Salir</span>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default withRouter(AuthHeader);
