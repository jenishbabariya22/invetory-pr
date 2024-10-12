import React, { useState, useEffect } from 'react';

const InventoryForm = ({ addItem, currentItem }) => {
  const [itemData, setItemData] = useState({ name: '', quantity: '', category: '' });

  useEffect(() => {
    if (currentItem) {
      setItemData(currentItem);
    } else {
      setItemData({ name: '', quantity: '', category: '' });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemData);
    setItemData({ name: '', quantity: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-3">{currentItem ? 'Update' : 'Add'} Inventory Item</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Item Name:</label>
        <input
          type="text"
          name="name"
          value={itemData.name}
          onChange={handleChange}
          className="form-control"
          id="name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={itemData.quantity}
          onChange={handleChange}
          className="form-control"
          id="quantity"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <input
          type="text"
          name="category"
          value={itemData.category}
          onChange={handleChange}
          className="form-control"
          id="category"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">{currentItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default InventoryForm;
