/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TaskItem({ task, onCompleted, onDeletedItem }) {
	const getStyle = () => {
		return {
			height: "21rem",
			padding: "2rem",
		};
	};
	
	const style = ()=>{
		return{
			background: task.completed ? "#198754":"#ffc107",
			border: task.completed ? "#198754" : "#ffc107",
			resize: "none",
			textDecoration: task.completed ? "line-through" : "none",
		}
	}

	return (
		<>
			<Col style={{ height: "100%" }}>
				<CardGroup style={{ height: "100%" }}>
					<Card
						bg={task.completed ? "success" : "warning"}
						border={task.completed ? "success border-3" : "danger border-3"}
						className="rounded shadow"
						style={getStyle()}>
						<Card.Header className="d-flex align-items-center justify-content-between" >
							<div style={{ flex: 0 }}>
							<Form.Check style={style()}// prettier-ignore
								type="switch"
								onChange={() => onCompleted(task.id)}
								id="custom-switch"
								checked={task.completed}
								className="form-control align-items-start"						
							/>
							</div>
							{task.completed && <span className="badge text-bg-light text-success">Completada</span>}	
						</Card.Header>
						<Card.Header>
							<Card.Title className="form-control" style={style()}>{task.name}</Card.Title>
						</Card.Header>
						<Card.Body>
							<textarea className="text-dark w-100" disabled rows="3" style={style() }>{task.description}</textarea>
						</Card.Body>
						<Card.Footer>
							<Button
								onClick={() => onDeletedItem(task.id)}
								variant="danger">
								<FaTrashAlt />
							</Button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Col>
		</>
	);
}
