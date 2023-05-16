import {singleton} from 'tsyringe';

type Listener = () => void;

@singleton()
export default class Store {
	count = 0;

	listeners = new Set<Listener>();

	publish() {
		this.listeners.forEach(forceUpdate => {
			forceUpdate();
			console.log(forceUpdate);
		});
	}

	addListener(listener: Listener) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listener) {
		this.listeners.delete(listener);
	}
}
