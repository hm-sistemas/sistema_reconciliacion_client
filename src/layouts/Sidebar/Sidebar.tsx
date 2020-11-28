import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

import logo from "../../images/Hm-logo-04.png";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      theme="dark"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div>
        <img src={logo} alt="Hospital Mexico" />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
        <Menu.Item key="0" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Ingresos
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Cortes
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Facturas
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Depositos
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          <NavLink to="/register">Registro</NavLink>
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          <Link to="/login">Acceso</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
