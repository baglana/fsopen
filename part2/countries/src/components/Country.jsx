const Country = ({ country }) => {
  if (country === null) {
    return null;
  }

  return (
    <>
      <h1>{country.name.common}</h1>

      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>

      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([k, v]) => (
          <li key={k}>{v}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} width="150" />
    </>
  );
};

export default Country;
