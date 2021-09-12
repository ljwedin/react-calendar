import React from 'react';
import MonthHeader from './MonthHeader';
import Calendar from 'react-calendar';
import ToDoDisplay from './ToDoDisplay';
import NewToDoItem from './NewToDoItem';
import ToDoDisplayDay from './ToDoDisplayDay';

const MonthView = (props) => {
    const tileContent = ({date, view}) => {
        let filtered = props.toDoList.filter((item) => {
            return item.date.getDate() === date.getDate() && item.date.getMonth() === date.getMonth() && item.date.getYear() === date.getYear();
        })

        return (
            <div>
                <p className="toDoAmount">{filtered.length > 0 ? filtered.length.toString() : null}</p>
                {filtered.map((item) => {
                    return <p>{item.toDo}</p>;
                })}
            </div>
        )
    }

    const handleDateChange = (value, event) => {
        props.setDate(value);
    }

    const filterByDate = (array, date) => {
        return array.filter((item) => {
            return item.date.getDate() === date.getDate() && item.date.getMonth() === date.getMonth() && item.date.getYear() === date.getYear();
        })
    }

    const dailyToDoList = filterByDate(props.toDoList, props.date);

    return (
        <div id="monthComponents">
            <MonthHeader />
            <div id="calendarToDo">
                <Calendar
                    tileContent={tileContent}
                    onClickDay={handleDateChange}
                />
                <ToDoDisplay
                    toDoList={props.toDoList}
                    setToDoList={props.setToDoList}
                />
            </div>
            <NewToDoItem
                toDoList={props.toDoList}
                setToDoList={props.setToDoList}
                date={props.date}
            />
            <ToDoDisplayDay dailyToDoList={dailyToDoList}/>
        </div>
    )
}

export default MonthView;