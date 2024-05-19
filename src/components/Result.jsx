/**
 * This function represents a result component.
 * It renders a div containing a title, subtitle, and price.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the result.
 * @param {number} props.value - The value of the result.
 *
 * @returns {JSX.Element} - A JSX element representing the result component.
 */
export function Result({ name, value }) {
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
