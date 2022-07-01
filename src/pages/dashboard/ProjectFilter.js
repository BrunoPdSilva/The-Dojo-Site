const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = newFilter => {
    changeFilter(newFilter)
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map(filter => (
          <button
            className={currentFilter === filter ? "active" : ""}
            key={filter}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
