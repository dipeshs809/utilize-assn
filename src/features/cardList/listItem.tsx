import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";
import React from "react";

import { OrderProps } from "./index.interface";
import styles from "./index.module.scss";
const ListItem: React.FC<OrderProps> = ({
  customer_email,
  customer_name,
  id,
  product,
  quantity,
}) => {
  return (
    <List.Item
      actions={[
        <Button icon={<EditOutlined />} type="primary" key="edit">
          Edit
        </Button>,
        <Button icon={<DeleteOutlined />} danger key="delete">
          Delete
        </Button>,
      ]}
    >
      <Row className={styles.column}>
        <Col span={6} offset={2}>
          <p>
            <span>Order ID:</span> {id}
          </p>
        </Col>
        <Col span={6} offset={2}>
          <p>
            <span>Customer Email:</span> {customer_email}
          </p>
        </Col>
        <Col span={6} offset={2}>
          <p>
            <span>Quantity:</span> {quantity}units
          </p>
        </Col>
        <Col span={6} offset={2}>
          <p>
            <span>Customer Name:</span> {customer_name}
          </p>
        </Col>
        <Col span={6} offset={2}>
          <p>
            <span>ProductType:</span> {product}
          </p>
        </Col>
      </Row>
    </List.Item>
  );
};

export default ListItem;
