import client from './client';

export const getTodos = () => client.get('/todos');
export const createTodo = (title) => client.post('/todos', { title });
export const toggleTodo = (id) => client.patch(`/todos/${id}/toggle`);
export const deleteTodo = (id) => client.delete(`/todos/${id}`);
