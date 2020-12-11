import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Modal } from "antd";
import DatePicker from "../../elements/DatePicker";
import RateService from "../../../services/rate.service";

const AddIncomeForm = ({
  addIncome,
  visible,
  onCancel,
  confirmAddLoading,
}: any) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        addIncome(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onChangeDate = (e: any) => {
    console.log("Received values of form: ", e.format("DD/MM/YYYY"));
    /* RateService.search(e.format("DD-MM-YYYY")).then((rate) => {
      console.log("rate: ", rate);
      form.setFieldsValue({ exhange_rate: rate });
    }); */
  };

  return (
    <Modal
      title="Registrar"
      visible={visible}
      onOk={onFinish}
      confirmLoading={confirmAddLoading}
      onCancel={onCancel}
      okText="Aceptar"
      cancelText="Cancelar"
    >
      <Form layout="vertical" form={form} initialValues={{ exchangeRate: 0 }}>
        <Form.Item
          name="date"
          label="Fecha"
          rules={[{ required: true, message: "Seleccione una fecha" }]}
        >
          <DatePicker onChange={onChangeDate} />
        </Form.Item>
        <Form.Item label="Tipo de cambio" name="exchange_rate">
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => (value ? value.replace(/\$\s?|(,*)/g, "") : "")}
          />
        </Form.Item>
        <Form.Item name="comments" label="Comentarios">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddIncomeForm;
