import React from 'react';

type DisplayFieldProps = {
	add: number;
};

export default function DisplayField({add}: DisplayFieldProps) {
	return (
		<input type='text' value={add} />
	);
}
