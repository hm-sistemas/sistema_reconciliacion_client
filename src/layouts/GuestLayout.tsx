import React from "react";
import { Layout } from "antd";
import "./GuestLayout.css";
import logo from "../images/Hm-logo-04.png";
const { Header, Content, Footer } = Layout;

const GuestLayout = (props: any) => {
  return (
    <Layout className="layout">
      <Header>
        <div>
          <img src={logo} alt="Hospital Mexico" />
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>HM</Footer>
    </Layout>
  );
};

export default GuestLayout;
