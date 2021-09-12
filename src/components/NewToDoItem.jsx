const NewToDoItem = (props) => {
	const date = props.date;

	// Modell för nytt todo-item
	const newToDoItem = {
		id: props.toDoList.length,
		date: date,
		toDo: '',
		done: false
	};

	// Ändrar textinnehåll till user input
	const onChangeInputText = (e) => {
		newToDoItem.toDo = e.target.value;
	};

	// Uppdaterar todolistan med nytt item
	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.toDo.value) {
			e.target.toDo.value = "";
			props.toDoList.push(newToDoItem);
			props.setToDoList([...props.toDoList]);
		};
	};

	return (
		<div id="newToDoItem">
			<h3>Ny sak att göra (välj datum i kalendern):</h3>
			<p>Datum: {date.toLocaleDateString()}</p>
			<form onSubmit={handleSubmit}>
				<input type="text" name="toDo" onChange={onChangeInputText} />
				<button type="submit" id="newToDoBtn">Lägg till</button>
			</form>
		</div>
	);
};

export default NewToDoItem;