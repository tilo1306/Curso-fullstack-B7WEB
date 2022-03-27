import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import * as C from './styles';
import { Item } from '../../types/Item';
type Props = {
  item: Item;
  clickFn: (item: Item) => void;
};

export const Button = ({ clickFn, item }: Props) => {
  return (
    <C.Button onClick={() => clickFn(item)}>
      <MdDeleteForever />
    </C.Button>
    // <button onClick={() => clickFn(item)}>
    //   <MdDeleteForever />
    // </button>
  );
};
