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
            let string;
            
            if (date.getDate() === 11 && date.getMonth() === 8) {
                return <p>Test</p>;
            } else {
                return null;
            }

            
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