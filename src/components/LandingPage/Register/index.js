
import { MainContainer, MyInput, MyButton } from "./RegisterElements";
import {AiOutlineCloseCircle} from "react-icons/ai"
import "./styles.scss"; 

export default function Register ({onRegister}){
    return(
        <MainContainer>
            <AiOutlineCloseCircle onClick={onRegister}/>
            <MyInput height={"10%"} placeholder="Full Name"/>
            <MyInput height={"10%"} type="number" placeholder="Age"/>
            <MyInput height={"10%"} placeholder="Email"/>
            <MyInput height={"10%"} placeholder="Password"/>
            <button className="close">Register</button>
        </MainContainer>
    )
}