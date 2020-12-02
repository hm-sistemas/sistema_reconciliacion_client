import React, { Fragment, useState } from "react";
import { Card, Modal } from "antd";
import IncomesTable from "./modules/IncomesTable";
import IncomesHeader from "./modules/IncomesHeader";
import AddIncomeForm from "./modules/AddIncomeForm";

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
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [confirmAddLoading, setConfirmAddLoading] = useState(false);
  const handleAddCancel = () => {
    console.log("Clicked cancel button");
    setAddModalVisible(false);
  };
  const handleAddIncome = () => {
    console.log("Clicked add button");
  };
  return (
    <Fragment>
      <IncomesHeader showAddModal={() => setAddModalVisible(true)} />
      <Card loading={false}>
        <IncomesTable data={data} />
      </Card>
      <Modal
        title="Title"
        visible={addModalVisible}
        onOk={handleAddIncome}
        confirmLoading={confirmAddLoading}
        onCancel={handleAddCancel}
      >
        <AddIncomeForm />
      </Modal>
    </Fragment>
  );
};

export default Incomes;
