import React from 'react';

const Form = ({ value, change, submit }) => {
	return (
		<form>
			<input
				type="text"
				value={value}
				placeholder="Wpisz miasto"
				onChange={change}
			/>
		</form>
	);
}

export default Form;