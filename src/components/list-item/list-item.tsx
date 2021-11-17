import React from "react";

import './list-item.scss';

interface Variant {
  title: string;
  href: string;
};

interface ListItemProps {
  title: string;
  image: string;
  text?: string;
  variants?: Variant[]
  link?: string;
};

export const ListItem: React.FC<ListItemProps> = ({
  title,
  image,
  text = undefined,
  variants = undefined,
  link = undefined,
}) => (
  <div
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${image})` }}
    className="list-item"
  >
    <h3 className="list-item__title">
      {title}
    </h3>
    {text && (
      <div className="list-item__text">
        {text}
      </div>
    )}
    {variants && variants?.map((item) => (
      <a
        rel="noreferrer"
        target="_blank"
        href={item.href}
        className="list-item__variants"
      >
        {item.title}
      </a>
    ))}
    {link && (
      <a
        rel="noreferrer"
        target="_blank"
        className="list-item__link"
        href={link}
      >
        Купить
      </a>
    )}
  </div>
);
