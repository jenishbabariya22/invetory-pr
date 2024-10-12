import React, { useState } from 'react';
import InventoryDashboard from './InventoryDashboard';
import InventoryForm from './InventoryForm';

const InventoryManager = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = (itemData) => {
    if (currentItem) {
      // Update existing item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === currentItem.id ? { ...item, ...itemData } : item
        )
      );
      setCurrentItem(null);
    } else {
      // Add new item
      const newItem = { id: Date.now(), ...itemData };
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className="container my-4">
      <h1 className="my-4">Inventory Management</h1>
      <InventoryForm addItem={addItem} currentItem={currentItem} />
      <InventoryDashboard items={items} onEdit={handleEdit} onDelete={deleteItem} />
    </div>
  );
};

export default InventoryManager;
