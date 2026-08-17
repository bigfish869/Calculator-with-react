import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");

    const handleClick = (value: string) => setInput(input + value);
      const handleClear = () => setInput("");
        const handleCalculate = () => {
            try { setInput(eval(input).toString()); }
                catch { setInput("Error"); }
                  };

                    const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];
                      const operators = ["/", "*", "-", "+"];

                        return (
                            <div className="calculator">
                                  <h2>React Calculator</h2>
                                        <input type="text" value={input} readOnly />
                                              <button onClick={handleClear} className="clear">C</button>
                                                    <div className="buttons">
                                                            {buttons.map((btn) => (
                                                                      <button 
                                                                                  key={btn} 
                                                                                              className={operators.includes(btn) ? "operators" : ""}
                                                                                                          onClick={() => btn === "=" ? handleCalculate() : handleClick(btn)}
                                                                                                                    >
                                                                                                                                {btn}
                                                                                                                                          </button>
                                                                                                                                                  ))}
                                                                                                                                                        </div>
                                                                                                                                                            </div>
                                                                                                                                                              );
                                                                                                                                                              }