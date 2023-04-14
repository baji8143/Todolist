import React,{useState} from 'react'
import Todolist from './Todolist'
import "./style.css"


const Form = () => {
    const [task,setTask] = useState("")
    const [todos,setTodos] = useState([])
    const handleChange = (e) =>{
        setTask(e.target.value)
    }

    const submitHandler = e =>{
     e.preventDefault();
     const newTodos = [...todos,task];
     setTodos(newTodos);
     setTask("");
    }

    const DelTodo = (index) => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos([...temp]);
      };
   return (
    <div>
        <center>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Todo Management Application</h5>
                    <form onSubmit={submitHandler}>
                        <input type="text" name="task" value={task} onChange={handleChange} className="inputField"/> &nbsp;&nbsp;
                        <input type="submit" value="Add" className="Addbtn"/>
                    </form> &nbsp;
                    <Todolist todos={todos} DelTodo={DelTodo}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Form