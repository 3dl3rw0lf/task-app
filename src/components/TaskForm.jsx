/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TaskForm({ addTask }) {
	const [userTaskName, setUserTaskName] = useState("");
	const [userTasksDescription, setUserTasksDescription] = useState("");

	const handleUserTaskName = (event) => {
		setUserTaskName(event.target.value);
	};

	const handleUserTaskDescription = (event) => {
		setUserTasksDescription(event.target.value);
	};

	const submitTask = (event) => {
		event.preventDefault();
		if (userTaskName.trim() !== "") {
			addTask(userTaskName, userTasksDescription);
			setUserTaskName("");
			setUserTasksDescription("");
		}
	};

    const isAddButtonDisabled = userTaskName.trim() === "";
	return (
		<>
			<form onSubmit={submitTask}>
				<div className="input-group mb-5 px-3 shadow rounded">
					<span className="input-group-text">
						Qué tienes que hacer?
					</span>
					<input
						aria-label="Task"
						className="form-control"
						onChange={handleUserTaskName}
						placeholder="Ingrese que tienes que hacer"
						type="text"
						value={userTaskName}
					/>
					<textarea
						aria-label="Description"
						className="form-control"
						onChange={handleUserTaskDescription}
						placeholder="Ingresa la descripción de lo que tienes que hacer"
						rows="1"
						style={{ resize: "none" }}
						type="text"
						value={userTasksDescription}
					/>
					<button className="btn btn-secondary" disabled={isAddButtonDisabled}>
						Agregar que hacer
					</button>
				</div>
			</form>
		</>
	);
}
