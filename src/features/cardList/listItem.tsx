import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, List, Row, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useAppDispatch } from "app/hooks";
import { deleteOrder, editOrder } from "app/slice/manageOrders";
import { emailRules, requiredRules } from "features/createOrder/rules";
import React, { useState } from "react";

import { OrderProps } from "./index.interface";
import styles from "./index.module.scss";
const ListItem: React.FC<OrderProps> = (props) => {
  const { customer_email, customer_name, id, product, quantity } = props;
  const [form] = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const toggleEdit = () => setIsEditing(!isEditing);
  const handleDelete = () => {
    dispatch(deleteOrder(props));
  };
  const handleEdit = () => {
    form
      .validateFields()
      .then((data) => {
        console.log(data);
        dispatch(editOrder(data));
        toggleEdit();
      })
      .catch((error) => {
        console.log(error);
        alert("Please enter valid details.");
      });
  };
  return (
    <Form form={form}>
      <List.Item
        actions={[
          <Button
            onClick={isEditing ? handleEdit : toggleEdit}
            icon={!isEditing ? <EditOutlined /> : <CheckOutlined />}
            type="primary"
            key="1"
          >
            Edit
          </Button>,
          isEditing ? (
            <Button
              onClick={toggleEdit}
              icon={<CloseOutlined />}
              danger
              type="primary"
              key="2"
            >
              Cancle edit
            </Button>
          ) : undefined,
          <Button
            onClick={handleDelete}
            icon={<DeleteOutlined />}
            danger
            key="3"
          >
            Delete
          </Button>,
        ]}
      >
        <Row className={styles.column}>
          <Col span={6} offset={2}>
            <div>
              <span>Order ID:</span>
              {!isEditing ? (
                id
              ) : (
                <FormItem
                  preserve={false}
                  rules={requiredRules}
                  initialValue={id}
                  name="id"
                >
                  <Input disabled />
                </FormItem>
              )}
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div>
              <span>Customer Email:</span>
              {!isEditing ? (
                customer_email
              ) : (
                <FormItem
                  preserve={false}
                  rules={emailRules}
                  initialValue={customer_email}
                  name="customer_email"
                >
                  <Input />
                </FormItem>
              )}
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div>
              <span>Quantity:</span>
              {!isEditing ? (
                `${quantity}units`
              ) : (
                <FormItem
                  preserve={false}
                  rules={requiredRules}
                  initialValue={quantity}
                  name="quantity"
                >
                  <Input type="number" />
                </FormItem>
              )}
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div>
              <span>Customer Name:</span>
              {!isEditing ? (
                customer_name
              ) : (
                <FormItem
                  preserve={false}
                  rules={requiredRules}
                  initialValue={customer_name}
                  name="customer_name"
                >
                  <Input />
                </FormItem>
              )}
            </div>
          </Col>
          <Col span={6} offset={2}>
            <div>
              <span>ProductType:</span>
              {!isEditing ? (
                product
              ) : (
                <FormItem
                  preserve={false}
                  rules={requiredRules}
                  initialValue={product}
                  name="product"
                >
                  <Select
                    placeholder="Select a product"
                    options={[
                      { label: "Product 1", value: "Product 1" },
                      { label: "Product 2", value: "Product 2" },
                      { label: "Product 3", value: "Product 3" },
                    ]}
                  />
                </FormItem>
              )}
            </div>
          </Col>
        </Row>
      </List.Item>
    </Form>
  );
};

export default ListItem;
