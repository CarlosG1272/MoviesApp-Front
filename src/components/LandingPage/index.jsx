import React, { useState } from "react";
import {
  ContainerNav,
  ContainerSign,
  MainContainer,
  MyButton,
  MyNavBar,
  LoginContainer,
  RegisterContainer
} from "./LandingElements";
import { Link } from "react-router-dom";
import AnimationPopCorn from "./Animation";
import Register from "./Register";
import Login from "./Login";

export default function LandingPage() {
    const [showRegister, setShowRegister] = useState(false); 
    const [showLogin, setShowLogin] = useState(false); 
    const [showButtons, setShowButtons] = useState(true); 

    const onRegister = () => {
        !showRegister ? setShowButtons(false):setShowButtons(true)
        setShowRegister(!showRegister);  
    }

    const onLogin = () => {
        !showLogin ? setShowButtons(false):setShowButtons(true)
        setShowLogin(!showLogin); 
    }

  return (
    <MainContainer>
      <AnimationPopCorn />

      <RegisterContainer isShow={showRegister}>
        <Register onRegister={onRegister}/>
      </RegisterContainer>

      <LoginContainer isShow={showLogin}>
        <Login onLogin={onLogin}/>
      </LoginContainer>


      <ContainerNav>
        <MyNavBar>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </MyNavBar>
      </ContainerNav>

      <ContainerSign isShow={showButtons}>
        <MyButton onClick={onLogin}>Login</MyButton>
        <MyButton onClick={onRegister}>Register</MyButton>
      </ContainerSign>
    </MainContainer>
  );
}
