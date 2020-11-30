import React, { Fragment } from "react";
import { PageHeader, Card } from "antd";
import IncomesTable from "./modules/IncomesTable";

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
      <PageHeader className="site-page-header" title="Ingresos" />
      <Card loading={false}>
        <IncomesTable data={data} />
      </Card>
    </Fragment>
  );
};

export default Incomes;
