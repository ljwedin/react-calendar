const ToDoItems = (props) => {
	let newToDoList = props.toDoList;

	// Sorterar listan i kronologisk ordning
	const sortByDate = (arr) => {
		const sorter = (a, b) => {
			return a.date.getTime() - b.date.getTime();
		};
		arr.sort(sorter);
	};

	// Ändrar klass på item som är "checkat" för att ändra css
	const handleCheckbox = (e) => {
		let target = newToDoList.find((item) => parseInt(e.target.id) === item.id)
		target.done = !target.done
		props.setToDoList([...newToDoList]);
	};

	sortByDate(newToDoList);

	return newToDoList.map((item) => {
		return (
			<div id="toDoItem" key={item.id}>
				<input type="checkbox" id={item.id} onChange={handleCheckbox} checked={item.done}/>
				<p className={item.done ? "done" : "notDone"}>{item.date.toLocaleDateString()} - {item.toDo}</p>
			</div>
		);
	});
};

export default ToDoItems;