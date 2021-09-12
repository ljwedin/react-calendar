import ToDoItems from './ToDoItems';

const ToDoDisplay = (props) => {
    return (
        <div>
            <p>Att-göra-lista:</p>
            <div id="toDoDisplay">
                <ToDoItems toDoList={props.toDoList} setToDoList={props.setToDoList} />
            </div>
        </div>
    )
}

export default ToDoDisplay;