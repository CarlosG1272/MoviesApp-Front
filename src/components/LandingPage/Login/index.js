import { MainContainer, MyButton, MyInput } from "../Register/RegisterElements";
import {AiOutlineCloseCircle} from "react-icons/ai"
import "../Register/styles.scss"; 

export default function Login ({onLogin}){
    return(
    <MainContainer>
        <AiOutlineCloseCircle onClick={onLogin}/>
        <MyInput height={"15%"} placeholder="Email"/>
        <MyInput height={"15%"} type="password" placeholder="Password"/>
        <button className="pulse">Login</button>

    </MainContainer>)
}