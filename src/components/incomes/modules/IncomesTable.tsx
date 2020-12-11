import React from "react";
import { Table, Tag, Space } from "antd";
import { Dayjs } from "dayjs";

const IncomesTable = (props: any) => {
  const columns = [
    {
      title: "Fecha",
      dataIndex: "date",
      key: "date",
      render: (date: Dayjs) => <b>{date.format("MM-DD-YYYY")}</b>,
    },
    {
      title: "Tipo de cambio",
      dataIndex: "exchangeRate",
      key: "exchangeRate",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    /* {
      title: "Depositado",
      key: "depositId",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    }, */
    /* {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    }, */
  ];
  return <Table columns={columns} dataSource={props.incomes} />;
};

export default IncomesTable;
