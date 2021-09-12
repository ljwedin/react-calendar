import ToDoSingleItem from "./ToDoSingleItem";

const ToDoItems = (props) => {
    let toDoList = props.toDoList;

    const sortByDate = (arr) => {
        const sorter = (a, b) => {
            return a.date.getTime() - b.date.getTime();
        }
        arr.sort(sorter);
    }
    
    sortByDate(toDoList);

    return toDoList.map((item) => {
        return (
            <ToDoSingleItem item={item} />
        )
    })
}

export default ToDoItems;