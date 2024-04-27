"use client"
import ExamList from "../components/ExamList";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Button from "../components/Button";
import { useState } from "react";

const Schedule = (props) => {

    const examsList = [
        {
            id: 1,
            img: "/images/DefaultImage.png",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 2,
            img: "/images/DefaultImage.png",
            name: "CSCI 4300 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 3,
            img: "/images/DefaultImage.png",
            name: "CSCI 1301 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 4,
            img: '/images/DefaultImage.png',
            name: "CSCI 2610 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
        {
            id: 5,
            img: "/images/DefaultImage.png",
            name: "CSCI 1302 Midterm",
            date: "Nov 18",
            location: "Boyd 330",
            time: "3:55-5:10 P.M"
        },
  
    ];

    const [exams, setExams] = useState(examsList);

    const addExamHandler = (exam) => {
        setExams((prevExams) => {
            return [...prevExams, exam]
        })
    }

    return (
        <div>
            <Navbar isActive={true}/>
            
            <h1 className="upcoming-exams">Upcoming Exams</h1>

            <div className ="add-exam-button">
                <Link href="/addexam" onAddExam={addExamHandler}><Button>+ Add Exam</Button></Link>
            </div>

            <ExamList items={exams} />
        </div>
    )
}

export default Schedule;