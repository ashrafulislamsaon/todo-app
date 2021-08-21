const initialState = {
    todo: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload;
            return {
                ...state,
                todo: [
                    ...state.todo, {
                        id: id,
                        data: data
                    }
                ]

            }
            case 'DELETE_TODO':
            const updatedTodo = state.todo.filter((item)=> item.id !== action.id)   
            return {
                ...state,
                todo: updatedTodo
            }
        default:
            return state
    }
}

export default todoReducer;