"use client"
import { useRouter } from "next/navigation";
import UserContext, { UserProvider } from "./backend/context/UserContext";
import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"
import { Component, useContext, useEffect } from "react";


function Home () {

  const {userData, setUserData} = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (userData.token) {
            router.push('/schedule');
        }
    }, [userData.token, router]);

  return(
      <div className="home">
        <UserProvider>
          <Navbar/>
          <WelcomePage />
        </UserProvider>
      </div>
  )
}
export default Home;