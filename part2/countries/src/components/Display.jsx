import Country from "./Country";
import Countries from "./Countries";

const Display = ({ countries, country, setCountry }) => {
  return (
    <div>
      {countries.length > 10 ? (
        `Too many matches (${countries.length}), specify another filter`
      ) : countries.length > 1 ? (
        <Countries countries={countries} setCountry={setCountry} />
      ) : (
        ""
      )}

      <Country country={country} />
    </div>
  );
};

export default Display;
