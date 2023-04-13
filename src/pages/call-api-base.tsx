import { CountriesTable } from "@/components/CountriesTable";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const getThingsFromApiWRONG = async (text: string) => {
  console.log("I was called " + text + "!");
  return ["Felipe", "Brian", "Jorge", "Ricardo"];
};

export const Page = () => {
  const [force, setForce] = useState(0);
  const [callApi, setCallApi] = useState(0);
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  // This is wrong, because it will be called on every render
  // const data = getThingsFromApiWRONG("outside useEffect");

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://restcountries.com/v3.1/all");
      const values = await resp.json();
      setCountries(values);
      setLoading(false);
    })();
  }, [callApi]);

  return (
    <>
      <Typography variant="h1">Call API</Typography>
      <Button color="secondary" onClick={() => setForce(force + 1)}>
        Force State Change
      </Button>
      <Button color="secondary" onClick={() => setCallApi(callApi + 1)}>
        Force Call API
      </Button>
      <CountriesTable loading={loading} countries={countries} />
    </>
  );
};

export default Page;
