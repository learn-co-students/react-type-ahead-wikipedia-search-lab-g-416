"use strict"

class Store {

	constructor(initialState) {
		this.state = initialState;
		this.listeners = [];
	}

	addListener(listener) {
		const removeListener = () => {
			this.listeners = this.listeners.filter(fn => fn !== listener)
		}

		this.listeners.push(listener);
		return removeListener;
	}

	setState(state) {
		this.state = state;
		this.listeners.forEach(listener => listener(state));
	}

	getState() {
		return this.state
	}

}

module.exports = Store
