"use client";

import { addTodo } from '@/api';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * タスクを追加するフォームを表示
 *
 * @param {FormEvent} event - The form event.
 * @return {void} Returns nothing.
 */
const AddTask = () => {

  // 状態変数taskTitle、それを更新するsetTaskTitle関数 宣言
  const [taskTitle, setTaskTitle] = useState('');

  /**
   * フォームの送信処理
   *
   * @param {FormEvent} event - The form event.
   * @return {Promise<void>} Promise that resolves when the form submission is handled.
   */
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await addTodo({
      id: uuidv4(),
      text: taskTitle
    });
    setTaskTitle('');
  }

  return (
    <form className="mb-4 space-y-4" onSubmit={handleSubmit}>
      <input type="text" className="w-full border px-4 py-2 rounded-lg"
             onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTaskTitle(event.target.value)
             }
             value={taskTitle}
      />
      <button type="submit" className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-800">Add Task</button>
    </form>
  );
};

export default AddTask;
