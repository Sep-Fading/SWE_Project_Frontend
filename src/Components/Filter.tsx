import React, { useState, ChangeEvent } from "react";

interface FilterProps {
  onFilterChange: (filters: Record<string, boolean>) => void;
  title: string;
  filters: string[];
}

const Filter = ({ onFilterChange, title, filters }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filtersState, setFiltersState] = useState<Record<string, boolean>>(
    filters.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})
  );

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFiltersState((prevFilters) => {
      const updatedFilters = { ...prevFilters, [name]: checked };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <>
      <button
        className="flex justify-between items-center w-full border-b py-2 px-1 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex flex-col items-center gap-2 border-b py-3`}
      >
        {filters.map((filter) => (
          <div key={filter} className="flex items-center w-full">
            <input
              type="checkbox"
              id={filter}
              name={filter}
              checked={filtersState[filter]}
              onChange={handleFilterChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={filter} className="ml-2 text-sm text-gray-700">
              {filter}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
