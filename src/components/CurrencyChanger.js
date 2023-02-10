import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function CurrencyChanger() {
	const [currency, setcurrency] = useState("£");
	const { dispatch } = useContext(AppContext);

	const selectCurrency = (event) => {
		dispatch({
			type: "CHG_CURRENCY",
			payload: currency,
		});
	};

	return (
		<div className="alert alert-secondary">
			<span>
				<select
					className="custom-select bg-success"
					style={{ color: "white", marginRight: "0.5rem" }}
					id="inputGroupSelect02"
					onChange={(event) => setcurrency(event.target.value)}
				>
					<option value="$" name="Dollar">
						$ Dollar
					</option>
					<option value="£" name="Pound" selected>
						£ Pound
					</option>
					<option value="€" name="Euro">
						€ Euro
					</option>
					<option value="₹" name="Ruppee">
						₹ Ruppee
					</option>
				</select>
				<button className="btn btn-success" onClick={selectCurrency}>
					Change
				</button>
			</span>
		</div>
	);
}

export default CurrencyChanger;
