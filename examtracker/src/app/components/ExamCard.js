"use client"

import React, { useContext, useEffect, useState } from 'react';
import Button from "./Button";
import Link from "next/link";
import "./ExamCard.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import EditExam from './EditExam';

const ExamCard = (props) => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(`${props.name}`);
    const [subject, setSubject] = useState(`${props.subject}`);
    const [date, setDate] = useState(new Date(`${props.date}`));
    const [location, setLocation] = useState(`${props.location}`);
    const [img, setImg] = useState(`${props.img}`);

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


    const router = useRouter();
    const deleteHandler = async (event) => {
        event.preventDefault();

        try {
            const response = axios.delete(`http://localhost:8082/api/exams/${props.identifier}`);
            
            window.location.reload();
        } catch {
            console.log("Error in deleting exam")
        }
        
    };


    const editHandler = async (event) => {
        event.preventDefault();

        try {
            setEdit(true);
            const response = await axios.get(`http://localhost:8082/api/exams/${props.identifier}`);
            setName(response.data.name);
            setSubject(response.data.subject);
            setDate(response.data.date);
            setLocation(response.data.location);
            setImg(response.data.image);
        } catch {
            console.log("Error in editing exam")
        }
        
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
                setEdit(false);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                alert("Error in updating exam.")
            });
    };

    const renderEdit = () => {
        return (
            <div className="examcardedit">
                <form onSubmit={editAddHandler}>
                <div className="row">
                    <label>Name: </label>
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
                    <label>Date: </label>
                    <input 
                    type="date"
                    id="date"
                    value= {date}
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
                    <label>Image: </label>
                    <input 
                    type="text"
                    id="img"
                    value= {img}
                    onChange={imgChanger}
                    />
                </div>
                <Button type="submit" onClick={editAddHandler}>Edit Exam</Button>
                </form>
            </div>
        )
    }

    const renderData = () => {
        return (
            <div className="examcard">
                <img src={props.img} alt={props.name} width="200px" height="150px"/>
                <p>Exam: {props.name}</p>
                <p>Subject: {props.subject}</p>
                <p>Date: {props.date}</p>
                <p>Location: {props.location}</p>
                <div className="buttons-container">
                    <Button onClick={editHandler}>Edit Exam</Button>
                    <Link href="/schedule">
                        <Button onClick={deleteHandler} >Delete Exam</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        edit ? renderEdit() : renderData()
    );
}
export default ExamCard;