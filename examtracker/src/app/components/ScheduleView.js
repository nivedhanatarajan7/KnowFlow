import React, { useEffect } from 'react';
import "./ScheduleView.css";
import Link from 'next/link';
import Button from './Button';
import ExamList from './ExamList';
import { useRouter } from 'next/navigation';

const ScheduleView = () => {
    const router = useRouter();


    return (
        <div className="schedule-view-container">
            <h1 className="upcoming-exams">Upcoming Exams</h1>
            <div className ="add-exam-button">
                <Link href="/addexam"><Button>+ Add Exam</Button></Link>
            </div>
            <ExamList items={exams} />
        </div>
    );
}

export default ScheduleView;
