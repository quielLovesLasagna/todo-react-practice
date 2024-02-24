import Task from "./Task";

export default function Tasks({ tasks, onDeleteTask, onToggleCompleteTask }) {
	// ! -- If there is no task based on each category, don't render the task list
	if (tasks.length === 0) return;

	return (
		<ul className="task__list">
			{tasks.map((task) => (
				<Task
					task={task}
					key={task.id}
					onDeleteTask={onDeleteTask}
					onToggleCompleteTask={onToggleCompleteTask}
				/>
			))}
		</ul>
	);
}
