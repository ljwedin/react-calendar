import { useState, useEffect } from 'react';
import MonthView from './MonthView';

const ToDoCalendar = () => {
    const [toDoList, setToDoList] = useState([
        {
            id: 0,
            date: new Date(2021, 8, 21),
            toDo: 'irritera erik'
        },
        {
            id: 1,
            date: new Date(2021, 8, 22),
            toDo: '???'
        },
        {
            id: 2,
            date: new Date(2021, 8, 22),
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