import { useState, useEffect } from 'react';
import MonthView from './MonthView';

const ToDoCalendar = () => {
    // Skapar state för to-do-list och hämtar tidigare lista från local storage
    const [toDoList, setToDoList] = useState([], () => {
        getLocalStorage();
    });

    // Sätter dagens datum som default datum
    const [date, setDate] = useState(new Date());

    // Sätter to-do-list till ett tomt array om det inte finns något i local storage
    // Konverterar datumsträng till datumobjekt
    const getLocalStorage = () => {
        let storedToDoList = JSON.parse(localStorage.getItem('toDoList'));

        if (storedToDoList == null) {
            storedToDoList = [];
        } else {
            storedToDoList = storedToDoList.map((item) => {
                item.date = new Date(item.date);
                return item;
            });
        };

        setToDoList(storedToDoList);
    };

    const setLocalStorage = () => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

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
    );
};

export default ToDoCalendar;