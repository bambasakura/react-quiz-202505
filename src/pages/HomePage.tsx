import { Link } from "react-router-dom";
import { ROUTES } from "../const";

export default function HomePage() {
  return (
    <>
      <h1 className="">さくちゃんクイズ</h1>
      <p className="">何問正解できるかな？</p>
      <p className="">全部で5問だよ！</p>
      <Link to={ROUTES.QUIZ}>スタート！</Link>
    </>
  );
}
