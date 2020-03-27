import React from 'react';
import './App.css';
import BookContextProvider from './Context/BookContext';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import NewBookForm from './Components/BookForm';

function App () {
	return (
		<div className="App">
			<BookContextProvider>
				<NavBar />
				<BookList />
				<NewBookForm />
			</BookContextProvider>
		</div>
	);
}

export default App;
