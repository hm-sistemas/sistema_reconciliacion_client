import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  ScheduleOutlined,
  FileTextOutlined,
  FolderOutlined,
  DollarOutlined,
  CreditCardOutlined,
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
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <NavLink to="/">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DollarOutlined />}>
          <Link to="/ingresos">Ingresos</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FolderOutlined />}>
          <NavLink to="/cortes">Cortes</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<FileTextOutlined />}>
          <Link to="/facturas">Facturas</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ScheduleOutlined />}>
          <NavLink to="/depositos">Depositos</NavLink>
        </Menu.Item>
        <Menu.Item key="6" icon={<CreditCardOutlined />}>
          <Link to="/movimientos">Movimientos</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
