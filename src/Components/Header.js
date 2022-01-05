import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUsername,
  selectUserEmail,
  selectUserPhoto,
  setUserlogindetail,
} from "./features/users/userSlice";
import auth from "../firebase";
import { provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const useremail = useSelector(selectUserEmail);
  const userphoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setuser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setuser = (user) => {
    dispatch(
      setUserlogindetail({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setuser(user);
        navigate("/");
      }
    });
  });
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg"></Logo>
        {!username ? (
          <Userimg
            onClick={() => {
              handleAuth();
            }}
          >
            LOGIN
          </Userimg>
        ) : (
          <>
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
            <Imageuser
              src={userphoto}
              alt={useremail}
              onClick={() => {
                handleAuth();
              }}
            ></Imageuser>
          </>
        )}
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
  justify-content: space-between;
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
const Userimg = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 5%;
  cursor: pointer;
  outline: none;
  background: black;
  color: white;
  border: 2px solid white;
  letter-spacing: 1.5px;
`;
const Imageuser = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
