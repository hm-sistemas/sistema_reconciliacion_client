import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Ingreso exitoso"
      extra={<Button type="primary">Next</Button>}
    />
  );
};

export default Home;
