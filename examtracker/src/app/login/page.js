import LoginBox from "../components/LoginBox"
import Navbar from "../components/NavBar";
const LoginPage = () => {
    return (       
        <div>
            <Navbar isActive={false}/>
            <LoginBox />
        </div>
    )
}

export default LoginPage;