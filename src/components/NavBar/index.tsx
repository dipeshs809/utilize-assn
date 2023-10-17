import { PlusOutlined } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectUser } from "app/slice/auth";
import { toggleModal } from "app/slice/createOrderModalSlice";
import Logout from "features/auth/logout";
import React from "react";

import styles from "./index.module.scss";

const Image: React.FC<{ url: string }> = ({ url }) => {
  return <img src={url}></img>;
};

const NavBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const handleClick = () => {
    dispatch(toggleModal());
  };
  const menuProps: MenuProps = {
    theme: "light",
    mode: "horizontal",
    items: [
      {
        key: "home",
        label: user.name,
        icon: <Image url={user.image} />,
        className: styles.user,
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
      {
        key: "logout",
        label: <Logout />,
      },
    ],
  };
  return <Menu {...menuProps} />;
};

export default NavBar;
