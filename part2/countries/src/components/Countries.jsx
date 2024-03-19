const Countries = ({ countries }) =>
  countries.map((c) => <div key={c.name.common}>{c.name.common}</div>);

export default Countries;
