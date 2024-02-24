import { useState } from "react";
import Button from "./Button";

export default function Task({
	task,
	onDeleteTask,
	onToggleCompleteTask,
	onMarkTaskInProgress,
	onUpdateTask,
}) {
	const [editing, setEditing] = useState(false);
	const [updatedTitle, setUpdatedTitle] = useState(task.title);
	const [updatedDescription, setUpdatedDescription] = useState(
		task.description
	);

	// ! -- Adding complete state to a task based on completed property
	const dashedClass = task.completed ? "task__item--dashed" : null;

	function handleEdit() {
		// ! -- Checking if the task is empty
		if (updatedTitle.trim() === "" || updatedDescription.trim() === "") {
			alert("Please fill in the task's information");
			return;
		}

		setEditing((editing) => !editing);

		const updatedTask = {
			...task,
			title: updatedTitle,
			description: updatedDescription,
		};

		onUpdateTask(updatedTask);
	}

	return (
		<li className="task__item">
			<div className="task__item-heading">
				<input
					type="checkbox"
					className="task__item-checkbox"
					checked={task.completed}
					value={task.completed}
					onChange={() => onToggleCompleteTask(task.id)}
				/>
				{editing ? (
					<input
						type="text"
						value={updatedTitle}
						onChange={(e) => setUpdatedTitle(e.target.value)}
					/>
				) : (
					<h3
						className={`task__item-title task__item-title--${task.type} ${dashedClass}`}
					>
						{task.title}
					</h3>
				)}

				<div className="task__options">
					<Button className={"task__option"} onClick={handleEdit}>
						{editing ? "✔️" : "✏️"}
					</Button>
					<Button
						className={"task__option"}
						onClick={() => onMarkTaskInProgress(task.id)}
					>
						⏳
					</Button>
					<Button
						className={"task__option"}
						onClick={() => onDeleteTask(task.id)}
					>
						🗑️
					</Button>
				</div>
			</div>
			{editing ? (
				<textarea
					value={updatedDescription}
					onChange={(e) => setUpdatedDescription(e.target.value)}
				/>
			) : (
				<p className={`task__description ${dashedClass}`}>{task.description}</p>
			)}
		</li>
	);
}
