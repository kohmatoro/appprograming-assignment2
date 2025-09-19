import Button from "./Button";

export default function Keypad({ onKey }) {
  const keys = [
  { label: "HC", type: "func" },
  { label: "C", type: "func" },
  { label: "%", type: "op" },
  { label: "/", type: "op" },

  { label: "7", type: "num" },
  { label: "8", type: "num" },
  { label: "9", type: "num" },
  { label: "*", type: "op" },

  { label: "4", type: "num" },
  { label: "5", type: "num" },
  { label: "6", type: "num" },
  { label: "-", type: "op" },

  { label: "1", type: "num" },
  { label: "2", type: "num" },
  { label: "3", type: "num" },
  { label: "+", type: "op" },

  { label: "+/-", type: "num" },
  { label: "0", type: "num" },
  { label: ".", type: "num" },
  { label: "=", type: "op" }
];

  return (
    <div className="button-grid">
  {keys.map((k) => (
    <Button
      key={k.label}
      label={k.label}
      onClick={onKey}
      className={`btn ${k.type}`} 
    />
  ))}
</div>
  );
}