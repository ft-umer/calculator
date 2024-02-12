"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState(""); // Input field for calculator display
  const [result, setResult] = useState("");

  const handleNumberClick = (number: string) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator: string) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
      // setInput("")
      result
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-blue-500 mb-3">Calculator</h1>
      <div className="mb-3">
        <input
          type="text"
          className="bg-gray-500 p-2 rounded"
          value={input}
          readOnly
        />
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
      </div>
      <div className="flex space-x-2 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
      <p className="text-xl mt-4">
        Result:{" "}
        <span className="text-2xl font-bold text-blue-500">{result}</span>
      </p>
    </main>
  );
}
