import { useState } from "react";
import Calculate from "./Calculate";
import Result from "./Result";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  function handleInput(e) {
    if (e.key === "Enter") {
      setBill(parseFloat(e.target.value));
      e.target.value = null;
    }
  }

  function onBtnClick(e) {
    e.preventDefault();
    const selectedTip = Number(e.target.innerText);
    setTip((bill * selectedTip) / 100);
  }

  // Total Amount
  let totalAmount = () => {
    if (tip === 0) {
      return 0;
    } else {
      const totalAmount = bill + tip;
      return totalAmount;
    }
  };

  // Clear
  const clear = () => {
    setTip(0);
    setBill(0);
  };

  return (
    <div className="container">
      <Calculate
        bill={bill}
        handleInput={handleInput}
        onBtnClick={onBtnClick}
      />
      <Result tip={tip} totalAmount={totalAmount()} clear={clear} />
    </div>
  );
}

export default App;
