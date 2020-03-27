import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const initialBooks = window.localStorage.getItem('books')
		? JSON.parse(window.localStorage.getItem('books'))
		: [ { title: 'The Batman', author: 'Mark Miller', id: 1 } ];

	const [ books, setBooks ] = useState(initialBooks);

	const addBook = (title, author) => {
		setBooks([ ...books, { title, author, id: Math.random() } ]);
	};

	const deleteBook = (id) => {
		setBooks(
			books.filter((curr) => {
				return curr.id !== id;
			})
		);
	};

	useEffect(
		() => {
			window.localStorage.setItem('books', JSON.stringify(books));
		},
		[ books ]
	);

	return <BookContext.Provider value={{ books, addBook, deleteBook }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;

/*
useState([
		{ title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
		{ title: 'the final empire', author: 'brandon sanderson', id: 2 }
	])
	*/
