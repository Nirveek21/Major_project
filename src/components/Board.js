import Button from "../Elements/Button";
import GreenButton from "../Elements/GreenButton";
import Title from "../Elements/Title";
import ScoreCard from "./ScoreCard";
import ExitButton from "../Elements/ExitButton";
function Board({
  squares,
  onClick,
  Turn,
  AI,
  xScore,
  oScore,
  Winner,
  WinningSquares,
  ShowSquares,
  playAgain,
  clikExit,
}) {
  const renderSquare = (i) => {
    const color =
      WinningSquares !== null && WinningSquares.indexOf(i) !== -1
        ? "#39ff14"
        : null;
    return (
      <Button
        color={color}
        width={"100px"}
        height={"100px"}
        onClick={() => {
          onClick(i);
        }}
      >
        {!squares[i] ? "." : squares[i]}
      </Button>
    );
  };

  return (
    <>
      <Title>
        {Winner === "d" ? "Draw" : Winner !== null && "Winner is  " + Winner}
      </Title>
      {Winner === null && (
        <ScoreCard Turn={Turn} xScore={xScore} oScore={oScore} />
      )}
      {ShowSquares && (
        <div>
          <div>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>

          <div>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>

          <div>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      )}
      {!ShowSquares && (
        <div>
          <GreenButton onClick={playAgain}>Play Again</GreenButton>
          <ExitButton clikExit={clikExit} />
        </div>
      )}
    </>
  );
}

export default Board;
