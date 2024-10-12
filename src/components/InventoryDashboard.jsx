import React from 'react';

const InventoryDashboard = ({ items, onEdit, onDelete }) => {
  const getStockColor = (quantity) => {
    return quantity < 10 ? 'table-danger' : 'table-success';
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Inventory Items</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Stock Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id} className={getStockColor(item.quantity)}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td className="text-white">
                  {item.quantity < 10 ? 'Low Stock' : 'In Stock'}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No inventory items available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
