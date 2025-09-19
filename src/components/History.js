export default function History({ records }) {
  return (
    <div>
      <ul className="history-list">
        {records.map((r, index) => (
          <li key={index}>{r}</li>
        ))}
      </ul>
    </div>
  );
}