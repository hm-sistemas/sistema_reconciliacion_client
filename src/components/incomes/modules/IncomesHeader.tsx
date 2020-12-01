import React, { Fragment } from "react";
import { PageHeader, Tag, Button, Statistic, Row } from "antd";

const IncomesHeader = () => {
  return (
    <Fragment>
      <PageHeader
        title="Ingresos"
        tags={<Tag color="yellow">Pendientes</Tag>}
        subTitle="Fecha a fecha"
        extra={[
          <Button key="1" type="primary">
            Registrar
          </Button>,
        ]}
      >
        <Row>
          <Statistic title="Status" value="Pending" />
          <Statistic
            title="Price"
            prefix="$"
            value={568.08}
            style={{
              margin: "0 32px",
            }}
          />
          <Statistic title="Balance" prefix="$" value={3345.08} />
        </Row>
      </PageHeader>
    </Fragment>
  );
};

export default IncomesHeader;
