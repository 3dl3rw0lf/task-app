import { useState, useEffect } from "react";

import Swal from "sweetalert2";

import data from "./data.json";

import "./App.css";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
	const storedTasks = JSON.parse(localStorage.getItem("tasks")) || data;

	const [tasks, setTasks] = useState(storedTasks);

	useEffect(() => {
		// Guardar las tareas en localStorage cada vez que el estado 'tasks' cambia
		localStorage.setItem("tasks", JSON.stringify(tasks));
		Swal.fire({
			title: "¡Lista de tareas actualizada!",
			text: "La lista de tareas ha sido modificada.",
			icon: "info",
		});
	}, [tasks]);

	const onCompleted = (id) => {
		setTasks(
			tasks.map((task) => {
				return task.id === Number(id)
					? { ...task, completed: !task.completed }
					: { ...task };
			})
		);
	};

	const onDeletedItem = (id) => {
		Swal.fire({
			title: "Seguro que quieres borrar esta tarea?",
			text: "Serás incapaz de revertir esta acción!",
			icon: "warning",
			showCancelButton: true,
			cancelButtonText: "Cancelar",
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, bórrala!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Borrada!",
					text: "Tu tarea se borró correctamente.",
					icon: "success",
				});
				setTasks([...tasks].filter((task) => task.id !== id));
			}
		});
	};

	const addTask = (newTask, newDescription) => {
		console.log(`Nombre: ${newTask} & description: ${newDescription}`);
		let newItem = {
			id: +new Date(),
			name: newTask,
			description: newDescription,
			completed: false,
		};

		setTasks([...tasks, newItem]);
	};

	return (
		<>
			<TaskForm addTask={addTask} />
			<TaskList
				tasks={tasks}
				onCompleted={onCompleted}
				onDeletedItem={onDeletedItem}
			/>
		</>
	);
}

export default App;
