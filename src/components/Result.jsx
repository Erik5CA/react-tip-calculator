export function Result({name,value}) {
  return (
    <div className="results">
      <div>
        <h2 className="title-results">{name}</h2>
        <p className="subtitle-results">/ person</p>
      </div>
      <h3 className="price">{`$${value}`}</h3>
    </div>
  );
}
