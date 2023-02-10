import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);
	const handleDeleteExpense = () => {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: props.id,
		});
	};
	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	};
	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};
		dispatch({
			type: "RED_EXPENSE",
			payload: expense,
		});
	};
	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{props.currency}
				{props.cost}
			</td>
			<td>
				<button
					onClick={(event) => increaseAllocation(props.name)}
					style={{
						backgroundColor: "none",
						border: "none",
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						fill="currentColor"
						class="bi bi-plus-circle-fill"
						viewBox="0 0 16 16"
						style={{
							color: "green",
							backgroundColor: "white",
						}}
					>
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
					</svg>
				</button>
			</td>
			<td>
				<button
					onClick={(event) => decreaseAllocation(props.name)}
					style={{
						backgroundColor: "none",
						border: "none",
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						fill="currentColor"
						class="bi bi-dash-circle-fill"
						viewBox="0 0 16 16"
						style={{
							color: "red",
							backgroundColor: "white",
						}}
					>
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
					</svg>
				</button>
			</td>
			<td>
				<TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
			</td>
		</tr>
	);
};
export default ExpenseItem;
