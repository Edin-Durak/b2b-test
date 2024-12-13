import styles from "./Sidebar.module.css";

function Sidebar({ allColumns, visibleColumns, onColumnToggle, isOpen }) {
  const hiddenColumns = allColumns.filter(
    (col) => !visibleColumns.includes(col)
  );

  const handleDoubleClick = (column) => {
    onColumnToggle(column);
  };

  return (
    <div
      className={`${styles.sidebarContainer} ${!isOpen ? styles.closed : ""}`}
    >
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Neizabrane kolone</h3>
        <div className={styles.scrollableArea}>
          {hiddenColumns.map((column) => (
            <button
              key={column}
              className={styles.columnButton}
              onDoubleClick={() => handleDoubleClick(column)}
            >
              {column}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Prikazane kolone</h3>
        <div className={styles.scrollableArea}>
          {visibleColumns.map((column) => (
            <button
              key={column}
              className={`${styles.columnButton} ${styles.active}`}
              onDoubleClick={() => handleDoubleClick(column)}
            >
              {column}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
