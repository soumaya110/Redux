import React from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';


const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
      <TodoList />
		</div>
	);
};

export default App;
