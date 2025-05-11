import Confetti from "react-confetti";
import styles from "./Result.module.css";

interface ResultProps {
  maxQuizLength: number;
  correctNumber: number;
}

export default function Result({ maxQuizLength, correctNumber }: ResultProps) {
  return (
    <>
      <div>
        <p className="">あなたの正解数は...</p>
        <p
          className={styles.answer}
        >{`全${maxQuizLength}問中、${correctNumber}問でした！`}</p>
        {correctNumber === maxQuizLength ? (
          <p className={styles.comment}>
            すごい！全問正解！次あった時いいことがあるかも！
          </p>
        ) : (
          <p className={styles.answer}>
            {`まだまだだね！次はもっと頑張ろう！`}
          </p>
        )}
      </div>
      <Confetti />
    </>
  );
}
