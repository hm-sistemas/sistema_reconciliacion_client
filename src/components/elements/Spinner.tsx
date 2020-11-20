import React from "react";
import { Spin } from "antd";

import "./elements.css";

const Spinner = () => {
  return (
    <div className="center-spin">
      <Spin />
    </div>
  );
};

export default Spinner;
