import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Display from "./components/Display";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("effect run, value is now", value);

    // skip if value is not defined
    if (value) {
      console.log("fetching countries...");
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          console.log(
            response.data.filter((c) =>
              c.name.common.toLowerCase().includes(value.toLowerCase())
            )
          );
          setCountries(
            response.data.filter((c) =>
              c.name.common.toLowerCase().includes(value.toLowerCase())
            )
          );
        });
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Filter value={value} onChange={handleChange} />

      <Display countries={countries} />
    </>
  );
}

export default App;
