import React, {useEffect, useReducer, useState} from 'react';
import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import Store from '../store/Store';

export default function Counter() {
	const store = container.resolve(Store);
	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.addListener(forceUpdate);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return (
		<div>
			<p>{store.count}</p>
		</div>
	);
}
