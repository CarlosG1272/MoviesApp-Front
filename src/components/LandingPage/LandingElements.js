import styled from "styled-components";

export const MainContainer = styled.section`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: black;
    display: flex;
    flex-direction: column;
`

export const ContainerNav = styled.section`
    height: 10%; 
    display: flex; 
    justify-content: flex-end;
    align-items: center;
`

export const RegisterContainer = styled.section`
    position: absolute; 
    height: max-content; 
    width: max-content;
    top: 30vh;
    transition: all 1s;
    right: ${({ isShow })=>(isShow? "10vw" : "-100vw")};
`
export const LoginContainer = styled.section`
    position: absolute; 
    height: max-content; 
    width: max-content;
    top: 30vh;
    transition: all 1s;
    right: ${({ isShow })=>(isShow? "10vw" : "-100vw")};
`
export const ContainerSign = styled.section`
    height: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 1s linear;
    position: absolute;
    width: 100vw;
    right: ${({ isShow })=>(isShow ?  "0":"120vw")};

`

export const MyNavBar = styled.nav`
    height: 80%;
    display: flex;
    align-items: center;
    width: max-content;
    margin: 3rem;
    a {
        color: white; 
        text-decoration: none; 
        margin: 2rem; 
        font-size:1.35rem;
    }
`

export const MyButton = styled.div`
    color: red;
    width: 30%;
    font-size: 3rem;
    text-align: center;
    &:hover{
        cursor: pointer;
        color: white;
    }
`