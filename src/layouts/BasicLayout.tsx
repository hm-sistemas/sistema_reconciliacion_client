import React, { useState } from "react";
import { Layout } from "antd";

import "./BasicLayout.css";
import Sidebar from "./Sidebar/Sidebar";
import logo from "../images/Hm-logo-04.png";
const { Header, Content, Footer } = Layout;

const BasicLayout = (props: any) => {
  let [user, setUser] = useState(false);
  return (
    <Layout>
      {user ? <Sidebar /> : ""}
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header>
          <div>
            <img src={logo} alt="Hospital Mexico" />
          </div>
        </Header>
        <Content className="content">
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>HM</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
