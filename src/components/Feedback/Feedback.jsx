function Feedback({ data, totalVotes, positiveVotesPercent }) {
  const { good, bad, neutral } = data;

  return (
    <div className="feedback">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive: {positiveVotesPercent}%</p>
    </div>
  );
}

export default Feedback;
