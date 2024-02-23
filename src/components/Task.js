export default function Task({ task }) {
	return (
		<li className="task__item">
			<div className="task__item-heading">
				<h3 className={`task__item-title task__item-title--${task.status}`}>
					{task.title}
				</h3>
				<div className="task__options">
					<span className="task__option">✏</span>
					<span className="task__option">🗑</span>
				</div>
			</div>
			<p className="task__description">{task.description}</p>
		</li>
	);
}
