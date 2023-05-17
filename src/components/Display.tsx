import React from 'react';
import DisplayField from './DisplayField';

type DisplayProps = {
	add: number;
};

export default function Display({add}: DisplayProps) {
	return (
		<div>
			<h1>Display Number</h1>
			<DisplayField add={add} />
		</div>
	);
}
