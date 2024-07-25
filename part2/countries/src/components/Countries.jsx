const Countries = ({ countries, setCountry }) =>
  countries.map((c) => (
    <div key={c.name.common}>
      {c.name.common}
      <button onClick={() => setCountry(c)}>show</button>
    </div>
  ));

export default Countries;
