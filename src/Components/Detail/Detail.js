import React from "react";
import styled from "styled-components";
const Detail = () => {
  return (
    <>
      <Container>
        <Backgroundimage>
          <img src="/images/slider-badag.jpg" alt="" />
        </Backgroundimage>
        <Imagetitle>
          <img src="/images/viewers-disney.png" alt="/" />
        </Imagetitle>
        <Controls>
          <Playbutton>
            <img src="/images/play-icon-black.png" alt="/" />
            <span>Play</span>
          </Playbutton>
          <Trailerbutton>
            <img src="/images/play-icon-white.png" alt="/" />
            <span>Trailer</span>
          </Trailerbutton>
          <Plusbutton>
            <span>+</span>
          </Plusbutton>
          <WatchtogetherButton>
            <img src="/images/group-icon.png" alt="/" />
          </WatchtogetherButton>
        </Controls>
        <Subtitles>2018.7m.10min.Action.Adventure.Fantasy</Subtitles>
        <Description>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Description>
      </Container>
    </>
  );
};

export default Detail;
const Container = styled.div`
  height: calc(100vh-70px);
  position: relative;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
`;
const Backgroundimage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Imagetitle = styled.div`
  height: 30vh;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const Playbutton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 25px;
  border-radius: 4px;
  height: 56px;
  margin-right: 20px;
  font-size: 15px;
  cursor: pointer;
  background: rgb(249, 249, 249);
  outline: none;
  border: none;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const Trailerbutton = styled(Playbutton)`
  background: rgb(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;
const Plusbutton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.3);
  border: 2px solid white;
  cursor: pointer;
  margin-right: 26px;
  span {
    font-size: 30px;
    color: white;
  }
`;
const WatchtogetherButton = styled(Plusbutton)`
  background: rgb(0, 0, 0);
`;
const Subtitles = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  max-width: 760px;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
