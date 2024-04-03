"use client";

// pages/SomePage.js or components/SomeParentComponent.js
import React, { useState, useEffect } from "react";
import FilterMenu from "@/Components/FilterMenu";

const SomeParentComponent = () => {
  const [items, setItems] = useState([]); // This would be your data to filter
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilterChange = (filters) => {
    const activeFilters = Object.keys(filters).filter((key) => filters[key]);
    const filtered = items.filter((item) =>
      activeFilters.length ? activeFilters.includes(item.status) : true
    );
    setFilteredItems(filtered);
  };

  // Initial load of items, maybe from an API
  useEffect(() => {
    // Fetch items and setItems(...)
    // For demonstration, we'll just set some mock items
    const mockItems = [
      { id: 1, status: "pending" },
      { id: 2, status: "approved" },
      // ... more items
    ];
    setItems(mockItems);
    setFilteredItems(mockItems); // Initial render with all items
  }, []);

  return (
    <div>
      <FilterMenu onFilterChange={handleFilterChange} />
    </div>
  );
};

export default SomeParentComponent;
