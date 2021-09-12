const ToDoItems = (props) => {
    let newToDoList = props.toDoList;

    const sortByDate = (arr) => {
        const sorter = (a, b) => {
            return a.date.getTime() - b.date.getTime();
        }
        arr.sort(sorter);
    }

    // const handleCheckbox = (e) => {
    //     for (let item in newToDoList) {
    //         if (newToDoList[item].id === parseInt(e.target.id)) {
    //             if (newToDoList[item].value) {
    //                 newToDoList[item].value = false;
    //             } else {
    //                 newToDoList[item].value = true;
    //             }
    //         }
    //     }
        
    //     props.setToDoList(newToDoList);
    // }

    const handleCheckbox = (e) => {
        let target = newToDoList.find((item) => e.target.id == item.id)
        target.done = !target.done
        props.setToDoList([...newToDoList]);
    }

    sortByDate(newToDoList);

    return newToDoList.map((item) => {
        return (
            <div id="toDoItem" key={item.id}>
                <input type="checkbox" id={item.id} onChange={handleCheckbox} />
                <p className={item.done ? "done" : "notDone"}>{item.date.toLocaleDateString()} - {item.toDo} - {item.done.toString()}</p>
            </div>
        )
    })
}

export default ToDoItems;