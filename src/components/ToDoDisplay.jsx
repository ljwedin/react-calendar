import ToDoItems from './ToDoItems';

// Visar hela att-göra-listan
const ToDoDisplay = (props) => {
	const emptyLocalStorage = () => {
		localStorage.setItem('toDoList', JSON.stringify([]));
		props.setToDoList([]);
	};

	return (
		<div>
			<h2>Att-göra-lista:</h2>
			<div id="toDoDisplay">
				<ToDoItems toDoList={props.toDoList} setToDoList={props.setToDoList} />
			</div>
			<button onClick={emptyLocalStorage} className="emptyList">Töm hela listan</button>
		</div>
	);
};

export default ToDoDisplay;