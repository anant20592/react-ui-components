import classNames from "classnames";
import React from "react";
import ListAction from "./ListAction";
import ListItem from "./ListItem";
export interface ListI {
  as?: string;
  children: any;
}
const List = React.forwardRef((props: ListI, ref) => {
  const { as: Component = "ol", children } = props;
  const listClass = classNames({
    list: true,
  });
  return (
    <Component ref={ref} className={listClass}>
      {children}
    </Component>
  );
});

export default Object.assign(List, { Item: ListItem, Action: ListAction });
