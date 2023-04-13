import { Box } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  DataGridProps,
} from "@mui/x-data-grid";
import { GridRenderCellParams } from "@mui/x-data-grid/models";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.name.common;
    },
    flex: 1,
  },
  {
    field: "region",
    headerName: "Region",
    flex: 1,
  },
  {
    field: "capital",
    headerName: "Capital",
    flex: 1,
  },

  {
    field: "population",
    headerName: "Population",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return params.value.toLocaleString();
    },
  },
];

type CountriesTableProps = {
  loading: DataGridProps["loading"];
  countries: DataGridProps["rows"];
};

export const CountriesTable = (props: CountriesTableProps) => {
  return (
    <Box sx={{ height: "90%" }}>
      <DataGrid
        loading={props.loading}
        rows={props.countries}
        columns={columns}
        getRowId={(row) => row.name.common}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
