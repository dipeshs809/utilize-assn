import { List } from "antd";
import { useAppSelector } from "app/hooks";
import { selectDeletedOrders, selectOrders } from "app/slice/manageOrders";
import React from "react";

import data from "../../constants/DummyData.json";
import { OrderProps } from "./index.interface";
import ListItem from "./listItem";
const CardList: React.FC = () => {
  const orders = useAppSelector(selectOrders);
  const deletedOrders = useAppSelector(selectDeletedOrders);
  let orderList = [...orders, ...data];
  orderList = orderList.filter(
    (order) => !deletedOrders.some((item) => order.id === item.id)
  );
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSizeOptions: ["4", "8", "12", "16", "20"],
        position: "both",
        style: { textAlign: "center" },
      }}
      dataSource={orderList as OrderProps[]}
      renderItem={(item, index) => <ListItem {...item} key={index} />}
    />
  );
};

export default CardList;
