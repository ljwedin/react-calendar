const NewToDoItem = (props) => {
    const date = props.date;

    const newToDoItem = {
        id: props.toDoList.length,
        date: date,
        toDo: '',
        done: false
    }

    const onChangeInputText = (e) => {
        newToDoItem.toDo = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.toDoList.push(newToDoItem);
        props.setToDoList([...props.toDoList]);
    }

    return (
        <div id="newToDoItem">
            <h3>Ny sak att göra (välj datum i kalendern):</h3>
            <p>Datum: {date.toString()}</p>
            <form>
                <input type="text" name="toDo" onChange={onChangeInputText} />
                <button type="submit" id="newToDoBtn" onClick={handleSubmit}>Lägg till</button>
            </form>
        </div>
    )
}

export default NewToDoItem;