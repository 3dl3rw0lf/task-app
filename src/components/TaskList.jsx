/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";

import TaskItem from "./TaskItem";

// eslint-disable-next-line react/prop-types
export default function TaskList({ tasks, onCompleted, onDeletedItem }) {
	
	
	const totalCount = tasks.length;
	
	const completedCount = tasks.filter(
		(task) => task.completed === true
	).length;
	
	const pendingCount = totalCount - completedCount;

	return (
		<div className="rounded shadow">
			<div
				className={
					pendingCount > completedCount
						? "alert alert-danger"
						: pendingCount === completedCount
						? "alert alert-warning"
						: pendingCount === 0 
						? "alert alert-success"
						: "alert alert-info"
				}
				role="alert">
					<div className="row">
				<div className="col text-left">Tareas totales: {totalCount} </div>
				<div className="col text-center">tareas completas: {completedCount}</div>
				<div className="col text-right">tareas pedientes: {pendingCount}</div>

					</div>
			</div>
			<Row xs={1} md={3} className="g-3">
				{tasks.map((task, index) => (
					<TaskItem
						key={index}
						task={task}
						onCompleted={onCompleted}
						onDeletedItem={onDeletedItem}
					/>
				))}
			</Row>
		</div>
	);
}
