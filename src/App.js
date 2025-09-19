import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const isOp = (ch) => "+-*/%".includes(ch);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "HC") {
      setHistory([]);
      return;
    }

    if (value === "+/-") {
      if (input.startsWith("-")) {
        setInput(input.slice(1));
      } else {
        setInput("-" + input);
      }
      return;
    }
      

    if (input === "Error" && value !== "=") {
      setInput(value);
      return;
    }

    if (value === "=") {
      try {
        const safe =
          /^[\d+\-*/().%\s]+$/.test(input) && !isOp(input.trim().slice(-1));
        if (!safe) throw new Error("invalid expression");

        const result = eval(input).toString();
        setInput(result);

        const newRecord = `${input} = ${result}`;
        setHistory((prev) => [newRecord, ...prev].slice(-3));
      } catch {
        setInput("Error");
      }
      return;
    }

    if (isOp(value) && isOp(input.slice(-1))) {
      setInput((prev) => prev.slice(0, -1) + value);
      return;
    }

    if (value === ".") {
      if (input === "" || isOp(input.slice(-1))) {
        setInput((prev) => prev + "0.");
        return;
      }
      const tokens = input.split(/[\+\-\*\/\%]/);
      const last = tokens[tokens.length - 1];
      if (last.includes(".")) {
        return;
      }
    }

    setInput((prev) => prev + value);
  };

  return (
    <div className="container">

      <div className="history-container">
        <History records={history} />
      </div>

      <Display value={input} />

      {/* 버튼 렌더는 Keypad가 담당 */}
      <Keypad onKey={handleClick} />
    </div>
  );
}