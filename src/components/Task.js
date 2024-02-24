import Button from "./Button";

export default function Task({ task, onDeleteTask, onToggleCompleteTask }) {
	// ! -- Adding complete state to a task based on completed property
	const dashedClass = task.completed ? "task__item--dashed" : null;

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
				<h3
					className={`task__item-title task__item-title--${task.type} ${dashedClass}`}
				>
					{task.title}
				</h3>
				<div className="task__options">
					<Button className={"task__option"}>✏</Button>
					<Button
						className={"task__option"}
						onClick={() => onDeleteTask(task.id)}
					>
						🗑
					</Button>
				</div>
			</div>
			<p className={`task__description ${dashedClass}`}>{task.description}</p>
		</li>
	);
}
