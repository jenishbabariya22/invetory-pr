import React, { useState } from 'react';
import InventoryDashboard from './components/InventoryDashboard';
import InventoryForm from './components/InventoryForm';
import SupplierSection from './components/SupplierSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  // Function to add a new inventory item
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  // Function to add a new supplier
  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, newSupplier]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Inventory Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InventoryDashboard items={items} />
          <SupplierSection suppliers={suppliers} addSupplier={addSupplier} />
        </div>
        <InventoryForm addItem={addItem} />
      </div>
    </div>
  );
};

export default App;
