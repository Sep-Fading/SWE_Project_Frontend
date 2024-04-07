import Filter from "./Filter";
import React, { useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import Button from "@/Components/Button";

interface FilterMenuProps {
  onFilterChange: (
    filters: Record<string, boolean | number[] | number>
  ) => void;
}

const FilterMenu = ({ onFilterChange }: FilterMenuProps) => {
  return (
    <div className="sticky top-4 md:mt-2">
      <h1 className="hidden text-2xl text-blue ml-1 md:inline">Filter by</h1>
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
      <RangeSlider
        min={0}
        max={1000}
        title="Amount"
        onFilterChange={onFilterChange}
      />
      <Button
        onClick={() => onFilterChange({})}
        text="Clear Filters"
        style="w-full"
      />
    </div>
  );
};

export default FilterMenu;
