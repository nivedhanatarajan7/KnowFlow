"use client"

import axios from "axios"
import ExamCard from "./ExamCard"
import { useEffect, useState } from "react"
const ExamList = () => {
    const [exams, setExams] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:8082/api/exams')
        .then((res) => {
            setExams(res.data);
        })
        .catch((err) => {
            console.log("Error from ExamList")
        });
    }, []);

    return (
        <div>
            {exams.map((exam) => (
                <ExamCard 
                    key = {exam._id}
                    identifier = {exam._id}
                    name = {exam.name}
                    subject = {exam.subject}
                    date = {exam.date}
                    location = {exam.location}
                    img = {exam.image}
                />
            ))}
        </div>
    )
}

export default ExamList;