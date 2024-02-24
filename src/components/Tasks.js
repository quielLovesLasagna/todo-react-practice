import Task from "./Task";

export default function Tasks({ status, tasks }) {
	// ! -- Filter tasks based on their "status"
	const filteredTasks = tasks.filter((task) => task.status === status);

	// ! -- If there is no task based on each category, don't render the task list
	if (filteredTasks.length === 0) return;

	return (
		<ul className="task__list">
			{filteredTasks.map((task) => (
				<Task task={task} key={task.id} />
			))}
		</ul>
	);
}
