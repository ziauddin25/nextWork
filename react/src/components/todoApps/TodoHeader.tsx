type TodoTypes = {
    isOpen: boolean,
    setIsOpen: boolean,
    todoData: object,
    handleData: (value: string) => void;
    handleTodo: (value: string) => void;
};

export default function TodoHeader ({isOpen, setIsOpen,todoData, handleData, handleTodo}:TodoTypes) {
    return (
        <div className="">
            <h2 className="text-4xl">My task</h2>
            <p className="text-base">Create a new task!</p>
            <header className="flex mt-3 justify-between items-center">
                <div className="flex items-center gap-3">
                    <input type="text" className="p-2.5 bg-[#f3f4f6] border border-[#d4d5d7] rounded-md text-baes focus:outline-[#f9a21f]" placeholder="Find a task" />
                    {/* <div className="todo-btns">
                        <button className="todo-btn" id="pending-task">Pending</button>
                        <button className="todo-btn" id="completed-task">Completed</button>
                    </div> */}
                </div>
                <button onClick={()=> setIsOpen(!isOpen)} className="bg-[#030e28e6] py-3 px-4 rounded-md text-[#f3f4f6] cursor-pointer hover:bg-[#020a1ce6]">
                    Add Tasks <i className="fa-solid fa-plus"></i>
                </button>
                {/* add modal*/}
                {isOpen && (
                    <div className="add-modal">
                        <div className="modal-head">
                            <h4 className="modal-title">New tasks</h4>
                            <span id="close-modal"><i className="fa-solid fa-xmark"></i></span>
                        </div>
                        <input type="text" name="title" value={todoData?.title} onChange={handleData} className="modal-input" placeholder="Task title.." />
                        <textarea typeof="text" name="subTitle" value={todoData?.subTitle} onChange={handleData} className="modal-input" placeholder="Task desc..." ></textarea>
                        <select name="progress" className="select-progress" value={todoData?.progress} onChange={handleData}>
                            <option value="High" className="select-option">High</option>
                            <option value="Low" className="select-option">Low</option>
                        </select>
                        <div className="modal-btns">
                            <button className="cancel-btn" onClick={()=> setIsOpen(!isOpen)}>Cancel</button>
                            <button className="task-btn" onClick={handleTodo}>Create Task</button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}