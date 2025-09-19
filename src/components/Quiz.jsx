import React, { useState } from "react";
import { quizzes } from "../data/quizzes";

export default function Quiz({ topic }) {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState([]);

  const handleAnswer = (qIndex, option) => {
    if (!answered.includes(qIndex)) {
      if (option === quizzes[topic][qIndex].answer) {
        setScore(score + 1);
      }
      setAnswered([...answered, qIndex]);
    }
  };

  return (
    <div className="quiz">
      <h4>Quiz on {topic}</h4>
      <p>Score: {score}</p>
      {quizzes[topic].map((q, idx) => (
        <div key={idx}>
          <p>{q.q}</p>
          {q.options.map((o) => (
            <button key={o} onClick={() => handleAnswer(idx, o)}>
              {o}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
