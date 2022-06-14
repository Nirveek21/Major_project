import React from "react";
import Button from "./Button";
function ExitButton({ clikExit }) {
  return (
    <div className="Exit">
      <a onClick={clikExit}>
        <Button>Quit</Button>
      </a>
    </div>
  );
}

export default ExitButton;
