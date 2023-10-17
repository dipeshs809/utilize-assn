import { Button, Form, Input, Modal, Select, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectOpen, toggleModal } from "app/slice/createOrderModalSlice";
import { createOrder } from "app/slice/manageOrders";
import React from "react";

import { emailRules, requiredRules } from "./rules";
import { generateUid } from "./utils";
const CreateOrder = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpen);
  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then((data) => {
        const payload = {
          ...data,
          id: generateUid(),
        };
        dispatch(createOrder(payload));
        dispatch(toggleModal());
      })
      .catch(() => {
        alert("Could not Create order");
      });
  };
  return (
    <div>
      <Modal
        title="Create Order"
        open={open}
        onCancel={handleToggleModal}
        destroyOnClose={true}
        footer={null}
      >
        <Form form={form}>
          <FormItem
            label="Customer Name"
            name="customer_name"
            rules={requiredRules}
          >
            <Input placeholder="Customer's name" />
          </FormItem>
          <FormItem label="Email" name="customer_email" rules={emailRules}>
            <Input type="email" placeholder="Customer's email" />
          </FormItem>
          <FormItem label="Product" name="product" rules={requiredRules}>
            <Select
              placeholder="Select a product"
              options={[
                { label: "Product 1", value: "Product 1" },
                { label: "Product 2", value: "Product 2" },
                { label: "Product 3", value: "Product 3" },
              ]}
            />
          </FormItem>
          <FormItem label="Quantity" name="quantity" rules={requiredRules}>
            <Input type="number" min={0} placeholder="Number of units" />
          </FormItem>
          <Space align="center">
            <Button onClick={handleToggleModal} type="default">
              Cancel
            </Button>
            <Button onClick={handleSubmit} type="primary" htmlType="submit">
              Create order
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateOrder;
