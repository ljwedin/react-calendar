const ToDoSingleItem = (props) => {
    const item = props.item;

    const handleCheckbox = (e) => {
        item.done = !item.done
    }

    return (
        <div>
            <input type="checkbox" id={item.id} onChange={handleCheckbox} />
            <p class={item.done ? "done" : "notDone"}>{item.date.toLocaleDateString()} - {item.toDo}</p>
        </div>
    )
}

export default ToDoSingleItem;