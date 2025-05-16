import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "C") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        let expression = input.replace(/x/g, "*");
        let evalResult = eval(expression);
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <section className="sm:p-10 p-5 flex items-center justify-center">
      <div className="w-[300px] bg-slate-800 flex rounded-2xl flex-col p-2">
        <input
          type="text"
          value={input}
          readOnly
          dir="rtl"
          className="w-full text-right bg-slate-900 text-white text-3xl p-4 rounded-xl mb-2 shadow-inner"
        />
        {/* <span className="text-white text-right pr-4 mb-2">{result}</span> */}

        <div className="flex items-center flex-col pt-2 rounded-xl w-full max-w-xs mx-auto">
          {[
            ["AC", "C", "%", "/"],
            ["7", "8", "9", "x"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "00", "="],
          ].map((row, i) => (
            <div key={i} className="w-full flex justify-between mb-2">
              {row.map((btn, j) => (
                <button
                  key={j}
                  onClick={() => handleClick(btn)}
                  className={`flex-1 m-1 py-3 text-lg font-semibold rounded-lg shadow-sm transition duration-300 ${
                    btn === "="
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-600 hover:bg-slate-700 text-white"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
