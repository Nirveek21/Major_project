import React from "react";
import Title from "../Elements/Title";
import styled from "styled-components";
import GreenButton from "../Elements/GreenButton";
import Tittle2 from "../Elements/Tittle2";
function Mode({ clickHumanBtn, clickAIBtn }) {
  return (
    <>
      <Title>Tic Tac Toe</Title>
      <Tittle2>Win if you can</Tittle2>
      <GreenButton onClick={clickHumanBtn}>Player VS Player</GreenButton>
      <GreenButton onClick={clickAIBtn}>Player VS AI</GreenButton>
    </>
  );
}

export default Mode;
