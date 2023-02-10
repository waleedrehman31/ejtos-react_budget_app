import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
	const { budget, expenses, currency } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	const [budget1, setBudget1] = useState(budget);
	if (budget1 >= 20001) {
		alert("The value cannot exceed from £20000");
		return;
	}
	if (budget1 < totalExpenses) {
		alert("You can not reduce the budget value lower than spending");
	}
	return (
		<div className="alert alert-secondary">
			<span>
				Budget: {currency}
				<input
					required="required"
					type="number"
					id="budget"
					value={budget1}
					style={{ marginLeft: "", size: 5, width: 120 }}
					onChange={(event) => setBudget1(event.target.value)}
				></input>
			</span>
		</div>
	);
};
export default Budget;
