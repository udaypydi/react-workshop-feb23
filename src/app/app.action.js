import { ADD_TODO, TOGGLE_TODO } from './app.constant';

export function addTodo(value) {
  return {
    type: ADD_TODO,
    todoValue: value,
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    todoIndex: index,
  };
}