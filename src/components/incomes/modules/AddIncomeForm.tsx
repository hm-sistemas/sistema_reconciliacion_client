import React, { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import DatePicker from "../../elements/DatePicker";

const AddIncomeForm = () => {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        name="date"
        label="Fecha"
        rules={[{ required: true, message: "Seleccione una fecha" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="Tipo de cambio">
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
