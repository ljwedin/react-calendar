import { useState, useEffect } from 'react';
import MonthView from './MonthView';

const ToDoCalendar = () => {
    const [toDoList, setToDoList] = useState([
        {
            date: '21-09-2021',
            toDo: 'irritera erik'
        },
        {
            date: '22-09-2021',
            toDo: 'profit'
        }
    ]);

    // const getLocalStorage = () => {
    //     const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
    //     setToDoList(storedToDoList);
    // }

    // useEffect(() => {
    //     getLocalStorage();
    // }, []);

    return (
        <div id="content">
            <div id="monthView">
                <MonthView toDoList={toDoList} />
            </div>
        </div> 
    )
}

export default ToDoCalendar;