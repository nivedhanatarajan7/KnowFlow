import React from 'react';
import Button from "./Button";
import "./WelcomePage.css";
import Link from "next/link";



const WelcomePage = () => {
    return (
        <div className="intro-container">
            <div className="logo-container">
                <img src="/images/Logo.png" alt="KnowFlow Logo" className="logo"/>
                <h1 className="intro-heading">Welcome to KnowFlow</h1>
            </div>
            <p className="intro-tagline">Your Ultimate Exam Companion</p>
            <div className="intro-content">
                <h2>About Us</h2>
                <p>
                    Our Mission: Empowering students to excel in their exams.
                </p>
                <h2>How to Use KnowFlow</h2>
                <p>
                    Click on the "+" button to add details about your exams. 
                </p>
                <p>
                You can easily manage and track your exams by viewing, editing, or deleting them anytime.
                </p>
            </div>
            <Link href="/signup"><Button>Get Started</Button></Link>
            
        </div>
    );
}

export default WelcomePage;
