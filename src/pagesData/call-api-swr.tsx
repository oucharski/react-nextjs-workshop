import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

export const countryColumns: GridColDef[] = [
  {
    field: "name.common",
    headerName: "Name",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.name.common;
    },
  },
  {
    field: "population",
    headerName: "Population",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return params.value.toLocaleString();
    },
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return params.value.toLocaleString();
    },
  },
  {
    field: "languages",
    headerName: "Languages",
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => {
      return params.row.languages
        ? Object.values(params.row.languages).join(", ")
        : "N/A";
    },
  },
  {
    field: "flag",
    headerName: "Flag",
    flex: 1,
  },
];

export const personColumns: GridColDef[] = [
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
