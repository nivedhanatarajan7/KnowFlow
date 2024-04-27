import SignUpBox from "../components/SignUpBox";
import Navbar from "../components/NavBar";
const SignupPage = () => {
    return (
        <div>
            <Navbar isActive={false}/>
            <SignUpBox />
        </div>
    )
}

export default SignupPage;