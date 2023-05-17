import React, {useState} from 'react';
import store from '../store/store';

type NumberFieldProps = {
	size: number;
	setSize: (value: number) => void;
	add: number;
	setAdd: (value: number) => void;
};

export default function NumberField({size, setSize, add, setAdd}: NumberFieldProps) {
	console.log(store.getState());
	function handleClick() {
		store.dispatch({type: 'INCREMENT', size});
	}

	return (
		<>
			<input type='button' value='+' onClick={handleClick}/>
			<input type='text' value={size} onChange={e => {
				setSize(Number(e.target.value));
			}} />
		</>
	);
}
