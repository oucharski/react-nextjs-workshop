import useSWR from "swr";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Select, SelectChangeEvent, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { countryColumns, personColumns } from "@/pagesData/call-api-swr";

const fetcher = async (url: string) => {
  const resp = await fetch(url);
  const values = await resp.json();
  return values;
};

const options = [
  {
    objectName: "Country",
    url: "https://restcountries.com/v3.1/all",
    columns: countryColumns,
    getRowId: (row: any) => row.name.common,
  },
  {
    objectName: "User",
    url: "https://jsonplaceholder.typicode.com/users",
    columns: personColumns,
    getRowId: (row: any) => row.id,
  },
];

export const Page = () => {
  const [option, setOption] = useState<typeof options[0]>(options[0]);
  const { data, isLoading } = useSWR(option.url, fetcher);

  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    const objectName = event.target.value as string;
    const option = options.find((o) => o.objectName === objectName);
    if (option) {
      setOption(option);
    }
  };

  return (
    <>
      <Typography variant="h1">Call API SWR ({option.objectName})</Typography>
      <FormControl fullWidth>
        <InputLabel>Select API</InputLabel>
        <Select value={option.objectName} label="API" onChange={handleChange}>
          {options.map((o) => (
            <MenuItem key={o.objectName} value={o.objectName}>
              {o.objectName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DataGrid
        loading={isLoading}
        rows={data || []}
        columns={option.columns}
        disableRowSelectionOnClick
        getRowId={option.getRowId}
      />
    </>
  );
};

export default Page;
