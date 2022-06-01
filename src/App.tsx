import {FC} from "react"; 
import Todo from "./Components/Todo";

const App:FC=()=> {

  const myTodo={
    id:1,
    title:"Bring bread",
    done:false,
  };
  return (
    <div className='p-5'>
      <Todo todo={myTodo}/>
    </div>
  )
}

export default App
