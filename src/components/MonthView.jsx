import React from 'react';
import MonthHeader from './MonthHeader';
import Calendar from 'react-calendar';
import ToDoDisplay from './ToDoDisplay';

const MonthView = (props) => {
    console.log(props.toDoList);

    const tileContent = ({date, view}) => {
        let filtered = props.toDoList.filter((item) => {
            return item.date.getDate() === date.getDate() && item.date.getMonth() === date.getMonth() && item.date.getYear() === date.getYear();
        })

        return filtered.map((item) => {
            return <p>{item.toDo}</p>;
        })
    }

    return (
        <div id="monthComponents">
            <MonthHeader />
            <Calendar tileContent={tileContent} />
            <ToDoDisplay toDoList={props.toDoList} setToDoList={props.setToDoList} />
        </div>
    )
}

export default MonthView;