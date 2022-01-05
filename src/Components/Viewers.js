import React from "react";
import styled from "styled-components";
const Viewers = () => {
  return (
    <>
      <Container>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="disney" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" alt="disney" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="disney" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" alt="disney" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="disney" />
        </Wrap>
      </Container>
    </>
  );
};

export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
export const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border: 2px solid white;
    transform: scale(1.05);
  }
`;
