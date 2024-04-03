import Filter from "./Filter";

interface FilterMenuProps {
  onFilterChange: (filters: Record<string, boolean>) => void;
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
    </div>
  );
};

export default FilterMenu;
