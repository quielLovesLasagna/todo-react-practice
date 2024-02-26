import { useState } from "react";

export default function SearchTaskForm({ onSearchTask }) {
	const [query, setQuery] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		onSearchTask(query);
	}

	return (
		<>
			<form className="modal__search-form" onSubmit={handleSubmit}>
				<input
					className="modal__input"
					placeholder="Search by task title"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
		</>
	);
}
