const ToDoDisplay = (props) => {
    const toDoList = props.toDoList;

    return (
        <div>
            <p>Att-göra-lista:</p>
            <br />
            <p>{toDoList[0].toDo}</p>
        </div>
    )
}

export default ToDoDisplay;