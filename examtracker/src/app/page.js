"use client"
import { UserProvider } from "./backend/context/UserContext";
import Navbar from "./components/NavBar";
import WelcomePage from "./components/WelcomePage"
import { Component } from "react";


function Home () {
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