import React from "react";
import { Layout } from "antd";
import "./GuestLayout.css";
const { Header, Content, Footer } = Layout;

const GuestLayout = (props: any) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default GuestLayout;
