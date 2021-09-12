import React from 'react';
import MonthHeader from './MonthHeader';
import Calendar from 'react-calendar';
import ToDoDisplay from './ToDoDisplay';
import NewToDoItem from './NewToDoItem';
import ToDoDisplayDay from './ToDoDisplayDay';

const MonthView = (props) => {
	// Ändrar innehållet i en kalenderruta beroende på om det finns data för det datumet i arrayen
	const tileContent = ({date, view}) => {
		let filtered = props.toDoList.filter((item) => {
			return item.date.getDate() === date.getDate() && item.date.getMonth() === date.getMonth() && item.date.getYear() === date.getYear();
		});

		return (
			<div>
				<p className="toDoAmount">{filtered.length > 0 ? filtered.length.toString() : null}</p>
				{filtered.map((item) => {
					return <p>{item.toDo}</p>;
				})}
			</div>
		);
	};

	// Ändrar aktuellt datum vid klick på kalenderruta
	const handleDateChange = (value) => {
		props.setDate(value);
	};

	// Filtrerar ut korrekta poster från arrayet beroende på aktuellt datum
	const filterByDate = (array, date) => {
		return array.filter((item) => {
			return item.date.getDate() === date.getDate() && item.date.getMonth() === date.getMonth() && item.date.getYear() === date.getYear();
		});
	};

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
	);
};

export default MonthView;