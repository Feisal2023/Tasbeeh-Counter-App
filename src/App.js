import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const shouldReset = () => {
    const resetMessage = window.confirm("Are you sure you want to reset");
    if (resetMessage) {
      setCount(0);
    }
  };

  const handleCountClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Tasbeeh Counter</h1>
      <h1 className={` ${count}` > 0 ? "CountingDown" : "CountingReset"}>
        {count}
      </h1>
      <div className="counting">
        <button className="reset" onClick={shouldReset}>
          Reset
        </button>
        <button className="count" onClick={handleCountClick}>
          Count
        </button>
      </div>
    </div>
  );
}

export default App;
