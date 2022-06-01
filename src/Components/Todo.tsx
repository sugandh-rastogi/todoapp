import {FC,memo} from "react";
import TodoModel from "../Models/Todo";
import cn from "classnames";
type TodoProps={
    todo:TodoModel;
    
};

const Todo:FC<TodoProps>=({todo})=>{
    const {title,done}=todo;


    return(
        <div className="flex items-center" >
            <input className=""
            checked={done}
            type="checkbox"
            />
            <p className={cn("ml-2",{"line-through":done})}>{title}</p>
        </div>
    );
}

Todo.defaultProps={};

export default memo(Todo);