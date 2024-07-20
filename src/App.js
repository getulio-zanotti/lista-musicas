import React, { useState } from 'react';
import Listitem from './components/item';
import Insert from './components/iteminsert';
import './components/list.css';

function App() {
  const [items, setItems] = useState(['Does he know - One Direction', 'Perfect - One Direction', 'Espresso - Sabrina Carpenter']);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentText, setCurrentText] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentText(items[index]);
  };

  const handleSave = (index) => {
    const newItems = [...items];
    newItems[index] = currentText;
    setItems(newItems);
    setEditingIndex(null);
    setCurrentText('');
  };

  const ClearList = () => {
    setItems([]);
  };

  const handleAddItem = (newItemText) => {
    if (newItemText.trim()) {
      setItems([...items, newItemText.trim()]);
    }
  };
  document.title = "Músicas Favoritas"
  return (
    <div className="container">
      <h1>Minhas músicas favoritas</h1>
      <Insert handleAddItem={handleAddItem} />
      <Listitem
        items={items}
        editingIndex={editingIndex}
        currentText={currentText}
        setCurrentText={setCurrentText}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
      <div className="actions">
        <button onClick={ClearList} disabled={items.length === 0}>Limpar</button>
      </div>
    </div>
  );
}

export default App;
