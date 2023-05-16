import React, {useEffect, useReducer, useState} from 'react';
import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import Store from '../store/Store';

export default function CounterControl() {
	const store = container.resolve(Store);

	const handleClickIncrease = () => {
		store.count += 1;
		store.publish();
	};

	const handleClickDecrease = () => {
		store.count -= 1;
		store.publish();
	};

	return (
		<div>
			<button type='button' onClick={handleClickIncrease}> Increase</button>
			<button type='button' onClick={handleClickDecrease}> Decrease</button>
		</div>
	);
}
