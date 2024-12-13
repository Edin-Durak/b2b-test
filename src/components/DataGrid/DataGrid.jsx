import { DataGrid, Paging, Pager } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";

function CustomDataGrid({ data, columns }) {
  const gridColumns = columns.map((column) => ({
    dataField: column,
    caption: column,
    allowSorting: true,
    allowFiltering: true,
    minWidth: 150,
    allowResizing: true,
  }));

  const pageSizes = [10, 25, 50, 100];

  return (
    <DataGrid
      dataSource={data}
      columns={gridColumns}
      showBorders={true}
      rowAlternationEnabled={true}
      allowColumnReordering={true}
      allowColumnResizing={true}
      columnAutoWidth={true}
      hoverStateEnabled={true}
      noDataText="Nema dostupnih podataka"
      columnResizingMode="widget"
      columnMinWidth={150}
      width="100%"
      loadPanel={{
        enabled: true,
        text: "Učitavanje...",
      }}
      filterRow={{
        visible: true,
        operationDescriptions: {
          contains: "Sadrži",
          notContains: "Ne sadrži",
          startsWith: "Počinje sa",
          endsWith: "Završava sa",
          equal: "Jednako",
          notEqual: "Nije jednako",
        },
        resetOperationText: "Poništi",
      }}
      headerFilter={{
        texts: {
          cancel: "Otkaži",
          ok: "Primijeni",
          emptyValue: "(Prazno)",
        },
      }}
      scrolling={{
        mode: "standard",
        showScrollbar: "always",
        useNative: true,
      }}
      sorting={{
        ascendingText: "Sortiraj uzlazno",
        descendingText: "Sortiraj silazno",
        clearText: "Poništi sortiranje",
      }}
      contextMenu={{
        items: [
          {
            text: "Sortiraj uzlazno",
            icon: "context-menu-sort-asc",
            beginGroup: true,
          },
          {
            text: "Sortiraj silazno",
            icon: "context-menu-sort-desc",
          },
          {
            text: "Poništi sortiranje",
            icon: "context-menu-sort-none",
          },
        ],
      }}
    >
      <Paging defaultPageSize={10} />
      <Pager
        showPageSizeSelector={true}
        allowedPageSizes={pageSizes}
        showInfo={true}
        showNavigationButtons={true}
        infoText="Stranica {0} od {1} ({2} stavki)"
        displayMode="compact"
      />
    </DataGrid>
  );
}

export default CustomDataGrid;
