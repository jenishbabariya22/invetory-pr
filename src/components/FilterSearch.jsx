import React from 'react';

const FilterSearch = ({ categories, suppliers, onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.name, e.target.value);
  };

  return (
    <div className="filter-search mb-4 p-3 bg-light rounded shadow-sm">
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            name="category"
            id="category"
            className="form-select"
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="supplier" className="form-label">Supplier</label>
          <select
            name="supplier"
            id="supplier"
            className="form-select"
            onChange={handleFilterChange}
          >
            <option value="">All Suppliers</option>
            {suppliers.map((supplier, index) => (
              <option key={index} value={supplier}>{supplier}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="search" className="form-label">Search</label>
          <input
            name="search"
            id="search"
            placeholder="Search items..."
            className="form-control"
            onChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
