import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/todoActions/todoActions';
import TodoList from '../TodoList/TodoList';

const AddTodo = () => {

    const [todoInput, setTodoInput] = useState('');
    const dispatch = useDispatch()
    const todoList = useSelector((state)=> state.todoReducer.todo)
    return (
        <div className='container w-50'>
            <h2>Add to do</h2>
                <div class="mb-3">
                    <input type="email" class="form-control" id="add-todo" placeholder="Enter your todo"
                    value={todoInput} onChange={(e)=> setTodoInput(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-primary" onClick={()=> dispatch(addTodo(todoInput),
                setTodoInput('')) }>Add</button>
                {
                    todoList.map((item) =>{
                        return(
                            <TodoList item={item} key={item.id}/>
                        )
                    } )
                }
                
        </div>
    );
};

export default AddTodo;