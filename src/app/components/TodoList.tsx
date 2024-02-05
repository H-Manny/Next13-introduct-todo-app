import { Task } from '@/types';
import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: Task[];
}

/**
 * Renders a list of todos.
 *
 * @param {Todo[]} todos - An array of todo objects.
 * @return {JSX.Element} A JSX element representing the todo list.
 */
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
};

export default TodoList;