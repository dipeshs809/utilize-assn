import { Button, Form, Input, Modal, Select, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectOpen, toggleModal } from "app/slice/createOrderModalSlice";
import React from "react";

import { emailRules, requiredRules } from "./rules";
const CreateOrder = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectOpen);
  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  const handleSubmit = () => {
    dispatch(toggleModal());
  };
  return (
    <div>
      <Modal
        title="Create Order"
        open={open}
        onCancel={handleToggleModal}
        // onOk={handleToggleModal}
        destroyOnClose={true}
        footer={null}
      >
        <Form>
          <FormItem label="Customer Name" name="name" rules={requiredRules}>
            <Input type="email" placeholder="Customer's name" />
          </FormItem>
          <FormItem label="Email" name="email" rules={emailRules}>
            <Input type="email" placeholder="Customer's email" />
          </FormItem>
          <FormItem label="Product" name="product" rules={requiredRules}>
            <Select
              placeholder="Select a product"
              options={[
                { label: "Product 1", value: "product1" },
                { label: "Product 2", value: "product2" },
                { label: "Product 3", value: "product3" },
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
