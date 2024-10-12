import React, { useState } from 'react';

const SupplierSection = ({ suppliers, addSupplier }) => {
  const [supplierData, setSupplierData] = useState({ name: '', contact: '' });

  const handleChange = (e) => {
    setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSupplier(supplierData);
    setSupplierData({ name: '', contact: '' });
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Suppliers</h2>

      <ul className="list-group mb-4">
        {suppliers.length > 0 ? (
          suppliers.map((supplier, index) => (
            <li key={index} className="list-group-item">
              {supplier.name} - {supplier.contact}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No suppliers added yet.</li>
        )}
      </ul>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Supplier Name:</label>
          <input
            type="text"
            name="name"
            value={supplierData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact Details:</label>
          <input
            type="text"
            name="contact"
            value={supplierData.contact}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Supplier</button>
      </form>
    </div>
  );
};

export default SupplierSection;
