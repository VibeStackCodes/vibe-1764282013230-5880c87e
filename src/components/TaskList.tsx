import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2 className="text-lg font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded mb-2">
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <span className="text-sm text-gray-500">Status: {task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
