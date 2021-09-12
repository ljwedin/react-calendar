const NewToDoItem = (props) => {
    let date;

    return (
        <div id="newToDoItem">
            <p>Datum: {date}</p>
            <form>
                <input type="text" name="toDo" id="toDo" />
            </form>
        </div>
    )
}

export default NewToDoItem;