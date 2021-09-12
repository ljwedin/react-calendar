const ToDoDisplayDay = (props) => {
	return (
		<div>
			<h3>Dagens att-göra:</h3>
			{props.dailyToDoList.map((item) => {
				return (
					<div id="toDoItem" key={item.id}>
						<p className={item.done ? "done" : "notDone"}>{item.date.toLocaleDateString()} - {item.toDo}</p>
					</div>
				)}
			)}
		</div>
	);
};

export default ToDoDisplayDay;