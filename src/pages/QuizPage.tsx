import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import { quizData } from "../data/quiz";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState<boolean[]>([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LENGTH = quizData.length;

  const handleClick = ({ clickedIndex }: { clickedIndex: number }) => {
    console.log(`clickedIndex: ${clickedIndex}`);
    console.log(`answerIndex: ${quizData[quizIndex].answerIndex}`);
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LENGTH) {
      const correctNumber = answerLogs.filter((answer) => {
        return answer === true;
      });
      navigation("/result", {
        state: {
          maxQuizLength: MAX_QUIZ_LENGTH,
          correctNumber: correctNumber.length,
        },
      });
    }
  }, [MAX_QUIZ_LENGTH, answerLogs, navigation]);

  return (
    <>
      {quizData[quizIndex] && (
        <Display>{`Q${quizIndex + 1}. ${
          quizData[quizIndex].question
        }`}</Display>
      )}
      {quizData[quizIndex] &&
        quizData[quizIndex].options.map((option, index) => (
          <Button
            key={`key=${index}`}
            onClick={() => handleClick({ clickedIndex: index })}
          >
            {option}
          </Button>
        ))}
    </>
  );
}
