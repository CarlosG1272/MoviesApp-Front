import styled from "styled-components";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 50vh;
    width: 40vw;
    justify-content: space-around;
    align-items: center;
    svg{
        position: absolute;
        color: white;
        height: 2rem;
        width: auto;
        right: 0;
        top: 0;
        &:hover{
            color: red;
            cursor: pointer;
        }
    }
`

export const MyInput = styled.input`
    margin: 1rem;
    height: ${({height})=> height};
    width: 90%;
    border-radius: 4rem;
    font-size: 1rem;
    text-align: center;
    &::placeholder{
        text-align: center;
    }
`

export const MyButton = styled.button`
    width: 40%;
    height: 10%;
    
`

