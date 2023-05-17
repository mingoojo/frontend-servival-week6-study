import React from 'react';
import NumberField from './NumberField';

type AddNumberProps = {
	size: number;
	setSize: (value: number) => void;
	add: number;
	setAdd: (value: number) => void;
};

export default function AddNumber({size, setSize, setAdd, add}: AddNumberProps) {
	return (
		<div>
			<h1>Add Number</h1>
			<NumberField setSize={setSize} size={size} setAdd={setAdd} add={add} />
		</div>
	);
}
