import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/todoActions/todoActions';

const TodoList = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className='my-2'>
            <table className="table table-dark ">
                <tbody>
                    <tr>
                        <td className='w-50'>{item.data}</td>
                        <td className='w-50'><i class="fas fa-trash-alt" style={{color: 'tomato', cursor:'pointer'}} onClick={()=> dispatch(deleteTodo(item.id))}></i></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default TodoList;