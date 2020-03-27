import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookContext';

const NewBookForm = () => {
	const { addBook } = useContext(BookContext);

	const [ title, setTitle ] = useState('');
	const [ author, setAuthor ] = useState('');

	const handleSubit = (e) => {
		e.preventDefault();
		addBook(title, author);
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubit}>
			<input
				type="text"
				placeholder="Book Title"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				required
			/>
			<input
				type="text"
				placeholder="Name of the Author"
				value={author}
				onChange={(e) => {
					setAuthor(e.target.value);
				}}
				required
			/>
			<input type="submit" value="Add Book" />
		</form>
	);
};

export default NewBookForm;
