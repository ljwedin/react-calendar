import ToDoItems from './ToDoItems';

const ToDoDisplay = (props) => {
    const emptyLocalStorage = () => {
        localStorage.setItem('toDoList', JSON.stringify([]));
        props.setToDoList([]);
        console.log('Töm!');
    }

    return (
        <div>
            <h2>Att-göra-lista:</h2>
            <div id="toDoDisplay">
                <ToDoItems toDoList={props.toDoList} setToDoList={props.setToDoList} />
            </div>
            <button onClick={emptyLocalStorage} className="empty">Töm hela listan</button>
        </div>
    )
}

export default ToDoDisplay;