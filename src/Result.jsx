export default function Result({ tip, totalAmount, clear }) {
  return (
    <div className="Result">
      <div className="tip-amount">
        <p>Tip Amount</p>
        <span className="amount">{`₹${tip}`}</span>
      </div>
      <div className="total-amount">
        <p>Total</p>
        <span className="amount"> {`₹${totalAmount}`}</span>
      </div>
      <div className="clear">
        {/* <button className="clear-btn" onClick={clear}>
          Clear
        </button> */}
        <button
          className={
            totalAmount === 0 && tip === 0 ? "clear-btn" : "clear-btn-active"
          }
          onClick={clear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
