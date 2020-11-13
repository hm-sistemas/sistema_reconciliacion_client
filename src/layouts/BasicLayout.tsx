import React from "react";
import { Layout } from "antd";

import "./BasicLayout.css";
import Sidebar from "./Sidebar/Sidebar";

const { Header, Content, Footer } = Layout;

const BasicLayout = (props: any) => {
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="header" style={{ padding: 0 }} />
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
