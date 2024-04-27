'use client'
import EditExam from "../components/EditExam";
import ExamList from "../components/ExamList";
import Navbar from "../components/NavBar";
import {useEffect, useState} from 'react'
const EditPage = (props) => {
    const {state} = props.location;
    const[id, setId] = useState(state.id);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");
    useEffect(() => {
        try {
            const response = axios.get(`http://localhost:8082/api/exams/${id}`);
            console.log(response);
            setId(response.data._id);
            setName(response.data.name);
            setSubject(response.data.subject);
            setDate(response.data.date);
            setLocation(response.data.location);
            setImg(response.data.image);
        } catch {
            console.log("Error in editing exam")
        }
    })
    return (
        <div>
            <Navbar/>
            <EditExam 
                identifier = {id}
                name= {name}
                subject={subject}
                date={date}
                location={location}
                img={img}
            />
        </div>
    )
}

export default EditPage;