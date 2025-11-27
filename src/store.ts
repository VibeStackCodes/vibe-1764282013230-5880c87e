import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const useTaskStore = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  return { tasks, addTask };
};

export default useTaskStore;
