"use client"

import React from "react";

import Button from "./Button";
import "./Row.css"
import Card from "./Card";
import Link from "next/link";

import {useState} from 'react';
import axios from "axios";

const AddExam = (props) => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

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

    const submitHandler = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8082/api/exams', {
                name: name,
                subject: subject,
                date: date,
                location: location,
                image: img
            })
            .then((res) => {
                setExam({
                    name: '',
                    subject: '',
                    date: '',
                    location: '',
                    img: ''
                });

                router.push('/')
            })
            .catch((err) => {
                console.log("Error in creating exam")
            });
    };
    
    return (
        <div>
            <Card>
                <h1>Add Exam</h1>
                <form onSubmit={submitHandler}>
                <div className="row">
                    <label>Name of Exam: </label>
                    <input required
                    type="text"
                    id="name"
                    onChange={nameChanger}
                    />
                </div>

                <div className="row">
                    <label>Subject: </label>
                    <input required
                    type="text"
                    id="subject"
                    onChange={subjectChanger}
                    />
                </div>

                <div className="row">
                    <label>Date of Exam: </label>
                    <input required
                    type="date"
                    id="date"
                    onChange={dateChanger}
                    />
                </div>

                <div className="row">
                    <label>Location: </label>
                    <input required
                    type="text"
                    id="location"
                    onChange={locationChanger}
                    />
                </div>

                <div className="row">
                    <label>Image Address: </label>
                    <input required
                    type="text"
                    id="img"
                    onChange={imgChanger}
                    />
                </div>
                <Button type="submit" onClick={submitHandler}><Link href="/schedule">Add Exam</Link></Button>
                </form>
            </Card>
        </div>
    );
}
export default AddExam;