import { AppstoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { useAppDispatch } from "app/hooks";
import { toggleModal } from "app/slice/createOrderModalSlice";
import React from "react";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleModal());
  };
  const menuProps: MenuProps = {
    theme: "light",
    mode: "horizontal",
    items: [
      {
        key: "home",
        label: "Home",
        icon: <AppstoreOutlined />,
      },
      {
        key: "createOrder",
        label: (
          <Button type="primary" onClick={handleClick}>
            <PlusOutlined />
            Create Order
          </Button>
        ),
      },
    ],
  };
  return <Menu {...menuProps} />;
};

export default NavBar;
