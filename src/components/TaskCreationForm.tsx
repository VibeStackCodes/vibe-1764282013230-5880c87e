import React, { useState } from 'react';
import { validateInput } from '@/utils/validateInput';

const TaskCreationForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput(title, description)) {
      // Logic to add task goes here
      console.log('Task Created:', { title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="task-creation-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="border p-2 rounded mb-2 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
        className="border p-2 rounded mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Task</button>
    </form>
  );
};

export default TaskCreationForm;
