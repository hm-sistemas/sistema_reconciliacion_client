import React, { Fragment, useEffect, useState } from "react";
import { Card, Alert } from "antd";
import IncomesTable from "./modules/IncomesTable";
import IncomesHeader from "./modules/IncomesHeader";
import AddIncomeForm from "./modules/AddIncomeForm";

import IncomeService from "../../services/income.service";
import Income from "../../classes/Income";

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
  const [alertVisible, setAlertVisible] = useState(false);

  const [incomes, setIncomes] = useState<Income[]>([]);
  const [loadingIncomes, setloadingIncomes] = useState(true);
  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  const handleAddIncome = (values: any) => {
    setConfirmAddLoading(true);
    values.date = values.date.format("YYYY-MM-DD");
    IncomeService.create(values)
      .then((resp: any) => {
        console.log(resp.data);
        setAlertVisible(true);
        setAddModalVisible(false);
      })
      .catch((error) => {
        if (error.response) {
          //request was made and server responded with status code
          console.log(error.response);
        } else if (error.request) {
          //request was made and no response received
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      })
      .finally(() => setConfirmAddLoading(false));
  };

  const getIncomes = () => {
    IncomeService.get()
      .then((response) => {
        const receivedIncomes = response.data.data;
        if (receivedIncomes.length > 0) {
          const newIncomes: Income[] = [];
          receivedIncomes.forEach((element: any) => {
            const income = new Income(
              element.id,
              element.exchangeRate,
              element.comments,
              element.depositId,
              element.date
            );
            console.log(income);
            newIncomes.push(income);
            // setIncomes((prevIncomes) => [...prevIncomes, income]);
          });
          console.log(newIncomes);
          setIncomes(newIncomes);
        }

        console.log(incomes);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setloadingIncomes(false);
      });
  };

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <Fragment>
      <IncomesHeader showAddModal={() => setAddModalVisible(true)} />
      {alertVisible ? (
        <Alert
          message="Registro exitoso"
          type="success"
          showIcon
          closable
          afterClose={handleAlertClose}
        />
      ) : null}
      <Card loading={loadingIncomes}>
        <IncomesTable data={data} />
      </Card>

      <AddIncomeForm
        addIncome={handleAddIncome}
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        confirmAddLoading={confirmAddLoading}
      />
    </Fragment>
  );
};

export default Incomes;
