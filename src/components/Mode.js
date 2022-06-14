import React from "react";
import Title from "../Elements/Title";
import styled from "styled-components";
import GreenButton from "../Elements/GreenButton";

function Mode({ clickHumanBtn, clickAIBtn }) {
  return (
    <>
      <Title>Tic Tac Toe</Title>
      <GreenButton onClick={clickHumanBtn}>Player VS Player</GreenButton>
      <GreenButton onClick={clickAIBtn}>Player VS AI</GreenButton>
    </>
  );
}

export default Mode;
