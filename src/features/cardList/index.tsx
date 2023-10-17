import { List } from "antd";
import React from "react";

import data from "../../constants/DummyData.json";
import { OrderProps } from "./index.interface";
import ListItem from "./listItem";
const CardList: React.FC = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSizeOptions: ["4", "8", "12", "16", "20"],
        position: "both",
        style: { textAlign: "center" },
      }}
      dataSource={data as OrderProps[]}
      renderItem={(item, index) => <ListItem {...item} key={index} />}
    />
  );
};

export default CardList;
