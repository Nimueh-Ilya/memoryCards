export default function ScoreBoard({
  score,
  highscore,
}: {
  score: number;
  highscore: number;
}) {
  return (
    <>
      <div>
        <p>Score : {score}</p>
        <p>Highest Score : {highscore}</p>
      </div>
    </>
  );
}
