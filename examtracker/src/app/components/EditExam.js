"use client"
import Button from "./Button";
import { useEffect, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import "./Row.css"
import axios from "axios";
import { useRouter } from "next/navigation";
const EditExam = (props) => {
    const [name, setName] = useState(`${props.name}`);
    const [subject, setSubject] = useState(`${props.subject}`);
    const [date, setDate] = useState(`${props.date}`);
    const [location, setLocation] = useState(`${props.location}`);
    const [img, setImg] = useState(`${props.img}`);
    const [exam, setExam] = useState([]); //how to access old info?
    const router = useRouter();
    const nameChanger = (event) => {
        setName(event.target.value);
    }

    const subjectChanger = (event) => {
        setSubject(event.target.value);
    }

    const dateChanger = (event) => {
        setDate(event.target.value);
    }

    const locationChanger = (event) => {
        setLocation(event.target.value);
    }

    const imgChanger = (event) => {
        setImg(event.target.value);
    }

    const editHandler = (event) => {
        event.preventDefault();
        const exam = {
            name: name,
            subject: subject,
            date: date,
            location: location,
            image: img
        }
        axios 
            .put(`http://localhost:8082/api/exams/${props.identifier}`, exam)
            .then((res) => {
                router.push('/schedule');
            })
            .catch((error) => {
                console.log(error);
                alert("Error in updating exam.")
            });
    };

    const editAddHandler = (event) => {
        event.preventDefault();
        const exam = {
            name: name,
            subject: subject,
            date: date,
            location: location,
            image: img
        }
        axios 
            .put(`http://localhost:8082/api/exams/${props.identifier}`, exam)
            .then((res) => {
                router.push('/schedule');
            })
            .catch((error) => {
                console.log(error);
                alert("Error in updating exam.")
            });
    };
    
    return (
        <div>
            <Card>
                <h1>Edit Exam</h1>
                <form onSubmit={editHandler}>
                <div className="row">
                    <label>Name of Exam: </label>
                    <input 
                    type="text"
                    id="name"
                    value= {name}
                    onChange={nameChanger}
                    />
                </div>

                <div className="row">
                    <label>Subject: </label>
                    <input 
                    type="text"
                    id="subject"
                    value= {subject}
                    onChange={subjectChanger}
                    />
                </div>

                <div className="row">
                    <label>Date of Exam: </label>
                    <input 
                    type="date"
                    id="date"
                    value= {new Date(date)}
                    onChange={dateChanger}
                    />
                </div>

                <div className="row">
                    <label>Location: </label>
                    <input 
                    type="text"
                    id="location"
                    value= {location}
                    onChange={locationChanger}
                    />
                </div>

                <div className="row">
                    <label>Image Address: </label>
                    <input 
                    type="text"
                    id="img"
                    value= {img}
                    onChange={imgChanger}
                    />
                </div>
                <Button type="submit" onClick={editHandler}>Edit Exam</Button>
                </form>
            </Card>
        </div>
    );
}
export default EditExam;