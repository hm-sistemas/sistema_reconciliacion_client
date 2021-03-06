import React from "react";
import { Layout } from "antd";
import "./BasicLayout.css";
import Sidebar from "./Sidebar/Sidebar";
import logo from "../images/Hm-logo-04.png";
import AuthHeader from "./Header/AuthHeader";
const { Header, Content, Footer } = Layout;

const BasicLayout = (props: any) => {
  const user = localStorage.getItem("user");
  if (user) {
    return (
      <Layout>
        <Sidebar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <AuthHeader />
          <Content className="content">
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Hospital México</Footer>
        </Layout>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Header>
          <div>
            <img src={logo} alt="Hospital Mexico" />
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Hospital México</Footer>
      </Layout>
    );
  }
};

export default BasicLayout;
