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
      <div className="flex md:flex-col md:gap-1 mr-[2px]">
        <button
          onClick={() => onFilterChange({})}
          className="whitespace-nowrap text-center bg-fdm-gradient text-white h-[40px] duration-200 hover:shadow-lg w-full md:rounded"
        >
          Clear Filters
        </button>
        <button
          onClick={() => onFilterChange({})}
          className="whitespace-nowrap text-center bg-fdm-gradient text-white h-[40px] duration-200 hover:shadow-lg w-full md:rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
