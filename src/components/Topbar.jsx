import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
export default function Topbar() {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  justify-content: center;
  background: var(--cg-900, #1b1d1f);
`;
const Logo = styled.img`
  width: 75px;
  height: auto;
`;
