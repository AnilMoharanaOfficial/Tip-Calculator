// Buttons
const buttons = [5, 10, 15, 20, 25, 50];

export default function Calculate({ bill, handleInput, onBtnClick }) {
  return (
    <>
      <div className="calculate">
        <p>Bill</p>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Amount & Hit Enter"
            onKeyDown={handleInput}
          ></input>
          <div className="amount-display">{`₹${bill}`}</div>
        </div>
        <p>Select Tip % </p>
        <div className="btns">
          {buttons.map((btn) => (
            <button key={btn} onClick={onBtnClick}>
              {`${btn}`}
            </button>
          ))}
          <button className="custom-btn">Custom</button>
        </div>
      </div>
    </>
  );
}
