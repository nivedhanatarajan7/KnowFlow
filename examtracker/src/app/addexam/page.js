"use client"

import AddExam from "../components/AddExam";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import UserContext from "../backend/context/UserContext";
import { useRouter } from "next/navigation";
const AddPage = (props) => {

    const {userData, setUserData} = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (!userData.token) {
            router.push('/login');
        } else {
            router.push("/addexam")
        }
    }, [userData.token, router]);

    return (
        <div>
            <Navbar isActive={true} />
            {/* <AddExam onaddExam={props.onAddExam}/> */}
            <AddExam/>
        </div>
    )
}

export default AddPage;