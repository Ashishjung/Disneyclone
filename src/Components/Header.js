import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg"></Logo>
        <NavItem>
          <a>
            <img src="images/home-icon.svg" alt="home" />
            <span>Home</span>
          </a>
          <a>
            <img src="images/search-icon.svg" alt="Search" />
            <span>Search</span>
          </a>
          <a>
            <img src="images/watchlist-icon.svg" alt="WatchList " />
            <span>Watch list</span>
          </a>
          <a>
            <img src="images/original-icon.svg" alt="Original" />
            <span>Originals</span>
          </a>
          <a>
            <img src="images/movie-icon.svg" alt="movies" />
            <span>Movies</span>
          </a>
          <a>
            <img src="images/series-icon.svg" alt="series" />
            <span>Series</span>
          </a>
        </NavItem>
        <Userimg src="images/slider-scale.jpg" alt="Slider"></Userimg>
      </Nav>
    </>
  );
};

export default Header;
const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavItem = styled.div`
  display: flex;
  flex: 1;
  margin-left: 30px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const Userimg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
