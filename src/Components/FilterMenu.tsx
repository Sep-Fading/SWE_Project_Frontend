import Filter from "./Filter";
import React, { useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";

interface FilterMenuProps {
  onFilterChange: (filters: Record<string, boolean | number[] | number>) => void;
}

const FilterMenu = ({ onFilterChange }: FilterMenuProps) => {
  return (
    <div className="sticky top-4 mt-2">
      <h1 className="text-2xl text-blue ml-1">Filter by</h1>
      <Filter
        title="Status"
        filters={["Pending", "Approved", "Completed", "Rejected"]}
        onFilterChange={onFilterChange}
      />
      <Filter
        title="Category"
        filters={["Travel", "Meal", "Night Stay", "Gift"]}
        onFilterChange={onFilterChange}
      />
      <RangeSlider min={0} max={1000} title="Amount" onFilterChange={onFilterChange}/>
    </div>
  );
};

export default FilterMenu;
