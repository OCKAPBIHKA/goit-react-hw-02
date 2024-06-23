function Options({ onButtonClick, totalVotes, onResetButton }) {
  return (
    <div className="options">
      <button
        onClick={() => {
          onButtonClick("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onButtonClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onButtonClick("bad");
        }}
      >
        Bad
      </button>
      {totalVotes !== 0 && <button onClick={onResetButton}>Reset</button>}
    </div>
  );
}

export default Options;
