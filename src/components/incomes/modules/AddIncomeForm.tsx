import React, { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import DatePicker from "../../elements/DatePicker";
import RateService from "../../../services/rate.service";

const AddIncomeForm = ({ onFinish }: any) => {
  const [form] = Form.useForm();

  const onChangeDate = (e: any) => {
    console.log("Received values of form: ", e.format("DD/MM/YYYY"));
    RateService.search(e.format("DD-MM-YYYY")).then((rate) => {
      console.log("rate: ", rate);
      form.setFieldsValue({ exhangeRate: rate });
    });
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        name="date"
        label="Fecha"
        rules={[{ required: true, message: "Seleccione una fecha" }]}
      >
        <DatePicker onChange={onChangeDate} />
      </Form.Item>
      <Form.Item label="Tipo de cambio" name="exchangeRate">
        <InputNumber
          defaultValue={0}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "")}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default AddIncomeForm;
