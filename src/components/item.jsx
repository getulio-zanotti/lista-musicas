import React from 'react';

const Listitem = ({ items, editingIndex, currentText, setCurrentText, handleEdit, handleSave }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Salvar</button>
            </>
          ) : (
            <>
              {item}
              <button onClick={() => handleEdit(index)}>Editar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Listitem;