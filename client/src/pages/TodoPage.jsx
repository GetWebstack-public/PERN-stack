import React, { useEffect, useState } from 'react';
import { getTodos, createTodo, toggleTodo, deleteTodo } from '../api/todos';
import './TodoPage.css';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos()
      .then(({ data }) => setTodos(data))
      .catch(() => setError('Failed to load todos'))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const { data } = await createTodo(input.trim());
      setTodos([data, ...todos]);
      setInput('');
    } catch {
      setError('Failed to add todo');
    }
  };

  const handleToggle = async (id) => {
    try {
      const { data } = await toggleTodo(id);
      setTodos(todos.map((t) => (t.id === id ? data : t)));
    } catch {
      setError('Failed to update todo');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch {
      setError('Failed to delete todo');
    }
  };

  const done = todos.filter((t) => t.completed).length;

  return (
    <div className="page">
      <div className="todo-header">
        <h2 className="todo-title">My Tasks</h2>
        {todos.length > 0 && (
          <span className="todo-counter">{done}/{todos.length} done</span>
        )}
      </div>

      <form onSubmit={handleAdd} className="todo-form">
        <input
          className="form-control todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task…"
        />
        <button type="submit" className="btn btn-primary" disabled={!input.trim()}>
          Add
        </button>
      </form>

      {error && <p className="error-msg" style={{marginBottom:'1rem'}}>{error}</p>}

      {loading ? (
        <div className="todo-empty">Loading…</div>
      ) : todos.length === 0 ? (
        <div className="todo-empty">
          <div className="todo-empty-icon">✓</div>
          <p>No tasks yet. Add one above!</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <label className="todo-check-label">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <span className="todo-checkmark" />
              </label>
              <span className="todo-text">{todo.title}</span>
              <button className="btn-danger" onClick={() => handleDelete(todo.id)} title="Delete">✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
