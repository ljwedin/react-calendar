import { useState, useEffect } from 'react';
import MonthView from './MonthView';

const ToDoCalendar = () => {
    const [toDoList, setToDoList] = useState([], () => {
        getLocalStorage();
    });

    const [date, setDate] = useState(new Date());

    const getLocalStorage = () => {
        let storedToDoList = JSON.parse(localStorage.getItem('toDoList'));

        storedToDoList = storedToDoList.map((item) => {
            item.date = new Date(item.date);
            return item;
        })

        setToDoList(storedToDoList);
    }

    const setLocalStorage = () => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList))
    }

    useEffect(() => {
        getLocalStorage();
    }, [])

    useEffect(() => {
        setLocalStorage();
    }, [toDoList]);

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