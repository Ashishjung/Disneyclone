import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <CTA>
          <CtalogoOne src="/images/cta-logo-one.svg" />
          <SignUp>Get all there</SignUp>
          <Description>
            Get premium access to Raya and last dragon for a Disney plus
            Subscription . As of 03/26/21 ,the price and the subscription terms
            are subject . The Disney bundle will increase by dollar $1.
          </Description>
          <Ctalogotwo src="/images/cta-logo-two.png" />
        </CTA>
      </Container>
    </>
  );
};

export default Login;
const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  &::before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const CtalogoOne = styled.img``;
const SignUp = styled.div`
  width: 100%;
  background: #0063e5;
  color: #f9f9f9;
  padding: 16px 0;
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const Ctalogotwo = styled.img`
  margin-top: 12px;
  width: 90%;
`;
