import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoContent from "./TodoContent";

export default function TodoMain () {
    const [isOpen, setIsOpen] = useState(false);
    const [todoData, setTodoData] = useState({
        id: crypto.randomUUID(),
        title: '',
        subTitle: '',
        progress: '',
    });

    function handleData (e:any) {
        let key = e.target.name;
        let value = e.target.value;

        setTodoData({...todoData, [key]:value});
    };


    function handleTodo () {
        setIsOpen(!isOpen);
        console.log(todoData);
    };

    function createTask () {
        
    }

    return(
        <div className="py-4 relative">
            <TodoHeader isOpen={isOpen} setIsOpen={setIsOpen} todoData={todoData} handleData={handleData} handleTodo={handleTodo} />
            <TodoContent todoData={todoData} />
        </div>
    )
};