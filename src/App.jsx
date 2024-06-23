import Description from "../src/components/Description/Description";
import Options from "../src/components/Options/Options";
import Feedback from "../src/components/Feedback/Feedback";
import Notification from "../src/components/Notification/Notification";
import { useEffect, useState } from "react";
function App() {
  const initialOptionState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const getInitialOptionsState = () => {
    const savedOptions = localStorage.getItem("votedFeedback");
    if (savedOptions) {
      return Object.values(JSON.parse(savedOptions)).reduce(
        (acc, value) => acc + value,
        0
      ) !== 0
        ? JSON.parse(savedOptions)
        : initialOptionState;
    } else {
      return initialOptionState;
    }
  };

  const [option, setOption] = useState(getInitialOptionsState);

  const updateFeedback = (feedbackType) => {
    setOption({ ...option, [feedbackType]: option[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setOption(initialOptionState);
  };

  const totalFeedback = Object.values(option).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((option.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("votedFeedback", JSON.stringify(option));
  }, [option]);

  return (
    <>
      <Description />
      <Options
        onButtonClick={updateFeedback}
        totalVotes={totalFeedback}
        onResetButton={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          data={option}
          totalVotes={totalFeedback}
          positiveVotesPercent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
