import Task from "./Task";

// Sample tasks data
const tasksData = [
	{
		id: 1,
		title: "Task 1",
		description: "Description for Task 1",
		status: "todo",
	},
	{
		id: 2,
		title: "Task 2",
		description: "Description for Task 2",
		status: "in-progress",
	},
	{
		id: 3,
		title: "Task 3",
		description: "Description for Task 3",
		status: "completed",
	},
	{
		id: 4,
		title: "Hello world",
		description: "Hello world goodbye",
		status: "in-progress",
	},
];

export default function Tasks({ status }) {
	// Filter tasks based on their "status"
	const filteredTasks = tasksData.filter((task) => task.status === status);

	return (
		<ul className="task__list">
			{filteredTasks.map((task) => (
				<Task task={task} key={task.id} />
			))}
		</ul>
	);
}
