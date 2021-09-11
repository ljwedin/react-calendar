import React from 'react';
import MonthHeader from './MonthHeader';
import Calendar from 'react-calendar';
import ToDoDisplay from './ToDoDisplay';

class MonthView extends React.Component {
    state = {
        toDoList: this.props.toDoList
    }

    render() {
        const tileContent = ({date, view}) => {
            let filtered = this.state.toDoList.filter((item) => {
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
                <ToDoDisplay toDoList={this.props.toDoList} />
            </div>
        )
    }
}

export default MonthView;