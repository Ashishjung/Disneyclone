import React from "react";
import styled from "styled-components";
import { Wrap } from "./Viewers";
const Movies = () => {
  return (
    <>
      <Container>
        <h4>Recommended for You</h4>
        <Content>
          <Moviesposter>
            <img
              src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg"
              alt=""
            />
          </Moviesposter>
          <Moviesposter>
            <img
              src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=200&h=200"
              alt=""
            />
          </Moviesposter>
          <Moviesposter>
            <img
              src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=200&h=200"
              alt=""
            />
          </Moviesposter>
          <Moviesposter>
            <img
              src="https://ntvb.tmsimg.com/assets/p18722572_b_h8_ak.jpg?w=200&h=200"
              alt=""
            />
          </Moviesposter>
        </Content>
      </Container>
    </>
  );
};

export default Movies;
const Container = styled.div`
  margin-top: 30px;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;
`;
const Moviesposter = styled(Wrap)`
  overflow: hidden;
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgb(249, 249, 249, 0.8);
  }
`;
