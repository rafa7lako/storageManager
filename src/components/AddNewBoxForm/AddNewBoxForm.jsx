import React, { useState } from "react";
import "./AddNewBoxForm.css";




const AddNewBoxForm = () => {

    const [enteredSku, setEnteredSku] = useState('');
    const [enteredLayout, setEnteredLayout] = useState('');
    const [enteredItemQunatity, setEnteredItemQunatity] = useState('');

    const skuChangeHandler = event => {
        setEnteredSku(event.tsrget.value)
    }

	return (
		<>
			<form className="new-box-form" action="#">
				<label htmlFor="sku">
					Wpisz SKU:
					<input type="text" name="sku" onChange={skuChangeHandler}/>
				</label>
				<label htmlFor="layout">Wybierz język:</label>
				<select name="lang_layout" id="layout">
					<option value="us">US</option>
					<option value="ukr">Ukraiński</option>
					<option value="gr">Niemiecki</option>
					<option value="fr">Francuski</option>
				</select>
				<label htmlFor="quantity">
					Wpisz ilość:
					<input type="number" />
				</label>
				<button type='submit' >Wyślij</button>
			</form>
		</>
	);
};

export default AddNewBoxForm;
