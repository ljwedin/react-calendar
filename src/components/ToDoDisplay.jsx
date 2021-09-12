import ToDoItems from './ToDoItems';

const ToDoDisplay = (props) => {

    return (
        <div>
            <p>Att-göra-lista:</p>
            <br />
            <ToDoItems toDoList={props.toDoList} />
        </div>
    )
}

export default ToDoDisplay;