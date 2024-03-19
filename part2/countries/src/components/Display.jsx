import Country from "./Country";
import Countries from "./Countries";

const Display = ({ countries }) => {
  return (
    <div>
      {countries.length > 10 ? (
        `Too many matches (${countries.length}), specify another filter`
      ) : countries.length > 1 ? (
        <Countries countries={countries} />
      ) : countries.length > 0 ? (
        <Country country={countries[0]} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
