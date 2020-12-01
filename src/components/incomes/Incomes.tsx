import React, { Fragment } from "react";
import { Card } from "antd";
import IncomesTable from "./modules/IncomesTable";
import IncomesHeader from "./modules/IncomesHeader";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Incomes = () => {
  return (
    <Fragment>
      <IncomesHeader />
      <Card loading={false}>
        <IncomesTable data={data} />
      </Card>
    </Fragment>
  );
};

export default Incomes;
