import {createStore} from 'redux';

type ActionProps = {
	type: string;
	size: number;
};

export default createStore((state, action: ActionProps) => {
	if (state === undefined) {
		return {number: 0};
	}

	if (action.type === 'INCREMENT') {
		return {...state, number: state.number + action.size};
	}
});
