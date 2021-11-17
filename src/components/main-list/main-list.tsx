import React from "react";
import { ListItem } from "../list-item";

import './main-list.scss';

interface Variant {
  title: string;
  href: string;
};

interface ListItemData {
  title: string;
  image: string;
  text?: string;
  variants?: Variant[];
  link?: string;
}

interface MainListProps {
  item: ListItemData[];
};

export const MainList: React.FC<MainListProps> = ({
  item,
}) => (
  <div className="main-list">
    {item.map((item) => (
      <ListItem
        key={item.title}
        title={item.title}
        image={item.image}
        text={item.text}
        variants={item.variants}
        link={item.link}
      />
    ))}
  </div>
);
