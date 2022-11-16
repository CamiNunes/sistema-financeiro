import React from 'react';
import { Tr, Td } from './style';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
  return (
    <Tr>
      <Td>{item.desc}</Td>
      <Td>{item.amount}</Td>
      <Td alignCenter>
        {item.expense ? (<FaRegArrowAltCircleDown color="red" />) : (<FaRegArrowAltCircleUp color="green" />)}
      </Td>
      <Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Td>
    </Tr>
  );
};

export default GridItem;