import { useState, useEffect } from 'react';
import MonthView from './MonthView';

const ToDoCalendar = () => {
    const [toDoList, setToDoList] = useState([
        {
            id: 0,
            date: new Date(2021, 8, 21),
            toDo: 'irritera erik',
            done: false
        },
        {
            id: 1,
            date: new Date(2021, 8, 22),
            toDo: '???',
            done: false
        },
        {
            id: 2,
            date: new Date(2021, 8, 22),
            toDo: 'profit',
            done: false
        },
        {
            id: 3,
            date: new Date(2021, 7, 20),
            toDo: 'steal underpants',
            done: false
        }
    ]);

    const [date, setDate] = useState(new Date());

    // const getLocalStorage = () => {
    //     const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
    //     setToDoList(storedToDoList);
    // }

    // useEffect(() => {
    //     getLocalStorage();
    // }, []);

    useEffect(() => {
        console.log(date)
    });

    return (
        <div id="content">
            <div id="monthView">
                <MonthView
                    toDoList={toDoList}
                    setToDoList={setToDoList}
                    date={date}
                    setDate={setDate}
                />
            </div>
        </div> 
    )
}

export default ToDoCalendar;