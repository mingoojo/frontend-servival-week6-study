import React, {useReducer, useState} from 'react';
import AddNumber from './components/Addnumber';
import Display from './components/Display';
import store from './store/store';

export default function App() {
	const [size, setSize] = useState<number>(0);
	const [add, setAdd] = useState<number>(0);
	const stateChanged = () => {
		setAdd(store.getState().number);
		console.log(add);
	};

	const test2 = store.subscribe(stateChanged);
	console.log(test2);
	return (
		<>
			<div>
				<h1>Root</h1>
				<h1>Add Nomber Root</h1>
			</div>
			<AddNumber setSize={setSize} size={size} setAdd={setAdd} add={add}/>
			<Display add={add} />
		</>

	);
}
