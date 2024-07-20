import React, { useState } from 'react';

const Insert = ({ handleAddItem }) => {
  const [newItemText, setNewItemText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(newItemText);
    setNewItemText('');
  };

  return (
    <form className="insertion-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Nova Música"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Insert;