import ToDoItems from './ToDoItems';

const ToDoDisplay = (props) => {
    return (
        <div>
            <h2>Att-göra-lista:</h2>
            <div id="toDoDisplay">
                <ToDoItems toDoList={props.toDoList} setToDoList={props.setToDoList} />
            </div>
        </div>
    )
}

export default ToDoDisplay;