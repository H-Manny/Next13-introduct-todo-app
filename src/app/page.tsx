import Image from 'next/image';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getAllTodos } from '@/api';

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">Next.js 14 Todo App</h1>
      <div className="w-full max-w-xl mt-8">
        <div className="bg-white shadow-md rounded px-8 py-6">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  )
}
