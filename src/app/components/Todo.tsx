"use client";

import { editTodo, deleteTodo } from '@/api';
import { Task } from '@/types';
import React, { ChangeEvent, useState, useRef, useEffect } from 'react';

interface TodoProps {
  todo: Task;
}

/**
 * 単一のTodo項目をレンダリング
 *
 * @param {TodoProps} todo - The todo object to render.
 * @return {JSX.Element} The rendered todo item.
 */
const Todo = ({ todo }: TodoProps) => {

  const ref = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus(); // オプショナルチェーン オブジェクトのプロパティが存在しなくても、エラーを出さずに参照できる方法
    }
  }, [isEditing]);

  /**
   * 編集ボタン
   */
  const handleEdit = async () => {
    setIsEditing(true);
  }

  /**
   * 保存ボタン
   */
  const handleSave = async () => {
    await editTodo(todo.id, editedTaskTitle);
    setIsEditing(false);
  }

  /**
   * 削除ボタン
   */
  const handleDelete = async () => {
    await deleteTodo(todo.id);
  }

  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
      key={todo.id}>
    {isEditing ? (
      <input type="text" className="py-1 px-2 mr-2 bg-white rounded shadow"
             value={editedTaskTitle} ref={ref}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTaskTitle(e.target.value)}
      />) : (<span>{todo.text}</span>)}
    <div>
    {isEditing ? (
      <button className="text-blue-500 mr-2" onClick={handleSave}>保存</button>
      ) : (
      <button type="button" className="text-green-500 mr-2" onClick={handleEdit}>編集</button>
    )}

      <button type="button" className="text-red-500" onClick={handleDelete}>削除</button>
    </div>
  </li>
  )
};

export default Todo;
