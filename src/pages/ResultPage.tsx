import { Link, useLocation } from "react-router-dom";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const maxQuizLength = location.state.maxQuizLength;
  const correctNumber = location.state.correctNumber;

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, []);

  return (
    <>
      <Loading active={active} />
      <Result maxQuizLength={maxQuizLength} correctNumber={correctNumber} />
      <br />
      <Link to="/">もう一度チャレンジ</Link>
    </>
  );
}
