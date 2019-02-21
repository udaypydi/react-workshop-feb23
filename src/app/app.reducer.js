import { ADD_TODO, TOGGLE_TODO, INITIAL_STATE } from './app.constant';

function todoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TODO: {
      const { todoList } = state;
      todoList.push({ value: action.todoValue, active: true })
      return { ...state, todoList: [...todoList] };
    }
      
    case TOGGLE_TODO: {
      const { todoList } = state;
      todoList[action.todoIndex].active = !todoList[action.todoIndex].active;
      return { ...state, todoList: [...todoList] };
    }

     default:
      return { ...state }; 
  }
  
}

export default todoReducer;
