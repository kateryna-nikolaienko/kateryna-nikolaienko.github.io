import React from 'react';

const TableContent = ({
  attacks, activeElement, handleRowClick, handleKeyPress, dragStartHandler, dragOverHandler, dropHandler
}) => {
  return (
    attacks.map((item) => {
      return (
        <tr
          key={item.year}
          onClick={() => handleRowClick(item)}
          onKeyDown={handleKeyPress}
          className={(item === activeElement) ? 'activeRow' : ''}
          tabIndex={0}
          draggable
          onDragStart={(e) => dragStartHandler(e, item)} 
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, item)}
        >
          <td>{item.year}</td>
          <td>{item.description.name}</td>
          <td>{item.description.damage}</td>
        </tr>
      );
    })
  );
};

export default TableContent;
