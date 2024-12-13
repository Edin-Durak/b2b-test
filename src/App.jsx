import { useState, useEffect, useCallback } from "react";
import { api } from "./services/api";
import CustomDataGrid from "./components/DataGrid/DataGrid";
import Search from "./components/Search/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [data, cols] = await Promise.all([
          api.getTableData(),
          api.getColumns(),
        ]);
        setTableData(data);
        setFilteredData(data);
        setColumns(cols);
        setVisibleColumns(cols.slice(0, 5));
      } catch (error) {
        console.error("Greška pri učitavanju početnih podataka:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleSearch = useCallback(
    (searchTerm) => {
      if (!searchTerm) {
        setFilteredData(tableData);
        return;
      }

      const filtered = tableData.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    },
    [tableData]
  );

  const handleColumnToggle = useCallback((column) => {
    setVisibleColumns((prev) => {
      if (prev.includes(column)) {
        return prev.filter((col) => col !== column);
      }
      return [...prev, column];
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <div className="loading">Učitavanje...</div>;
  }

  return (
    <div className={`appContainer ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="mainContent">
        <div className="topBar">
          <Search onSearch={handleSearch} />
          <button
            className="toggleSidebar"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Sakrij sidebar" : "Prikaži sidebar"}
          >
            {isSidebarOpen ? "→" : "←"}
          </button>
        </div>
        <CustomDataGrid data={filteredData} columns={visibleColumns} />
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        allColumns={columns}
        visibleColumns={visibleColumns}
        onColumnToggle={handleColumnToggle}
      />
    </div>
  );
}

export default App;
