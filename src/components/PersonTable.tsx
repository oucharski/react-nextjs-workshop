import { Box } from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  DataGridProps,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "username",
    headerName: "Username",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "website",
    headerName: "Website",
    flex: 1,
  },
  {
    field: "company",
    headerName: "Company",
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.company.name;
    },
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row.address.street}, ${params.row.address.suite}, ${params.row.address.city}, ${params.row.address.zipcode}`;
    },
    flex: 1,
  },
];

type PersonTableProps = {
  loading: DataGridProps["loading"];
  persons: DataGridProps["rows"];
};

export const PersonTable = (props: PersonTableProps) => {
  return (
    <Box sx={{ height: "90%" }}>
      <DataGrid
        loading={props.loading}
        rows={props.persons}
        columns={columns}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
